
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

// TODO checking if this works

// todo checking if this works

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));

var messages = [];
var sockets = [];

var pms = require("puzzlemakerscript"); pms.init(5,5,function(done){console.log(JSON.stringify(done));pms.show();});

var fs=require("fs");

var ENGLISH=[];
var GERMAN=[];
var SPANISH=[];

function startUpServer() {
  
  console.log("Server started...");
  
  getDictionary();
  
  console.log("Startup completed...");
}

function getDictionary() {
  
  fs.readFile('_english.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data=data.toLowerCase();
    ENGLISH = data.split(/\n/);
    console.log(ENGLISH.length);
  });
  
  fs.readFile('_spanish.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data=data.toLowerCase();
    SPANISH = data.split(/\n/);
    console.log(SPANISH.length);
  });  
  
  fs.readFile('_german.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data=data.toLowerCase();
    GERMAN = data.split(/\n/);
    console.log(GERMAN.length);
  });  
}

function isValidWord(word) {
  var isValid="";
  if (ENGLISH.indexOf(word)>-1) isValid += " ENGLISH ";
    if (SPANISH.indexOf(word)>-1) isValid += " SPANISH ";
      if (GERMAN.indexOf(word)>-1) isValid += " GERMAN ";
  return isValid;

}

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      
      console.log(isValidWord(msg));
      
      var newMessage = isValidWord(msg);
      
      if (newMessage!="") newMessage = "{{language(s)}} " + newMessage;
      
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text + " " + newMessage
        };
        
        if (err) {
          
        }

        broadcast('message', data);
        messages.push(data);
      });
      
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        if (err) {
          
        }        
        updateRoster();
      });
    });
    
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
        if (err) {
          
        }      
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

startUpServer();


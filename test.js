//todo Bring use of pms into server and use client to run server puzzle maker

//todo Host lostwords as a web service.  http://lostwords.org/request/puzzle/init  (get/post, etc)

var PuzzleMakerScript = require("puzzlemakerscript");

function example1() {

    PuzzleMakerScript.init(15,15);
        var wordList=["SMART","SIGN","CAT","DOG","PIZZA","CAR","TREE"];
        var howManyTimes = 1;
            for (var i=0;i<wordList.length;i++) {
             (PuzzleMakerScript.addWord(wordList[i],howManyTimes,1,1));  //set directions
             (PuzzleMakerScript.addWord(wordList[i],howManyTimes,-1,1));  
             (PuzzleMakerScript.addWord(wordList[i],howManyTimes,1,-1));  
             (PuzzleMakerScript.addWord(wordList[i],howManyTimes,-1,-1));  
            }
    PuzzleMakerScript.fillBlanks(PuzzleMakerScript.FillBlanksWith);
    PuzzleMakerScript.show();
}


function example2() {

    PuzzleMakerScript.init(15,15);
        var wordList=["SMART","SIGN","CAT","DOG","PIZZA","CAR","TREE"];
        var howManyTimes = 1;
            for (var i=0;i<wordList.length;i++) {
                var results=PuzzleMakerScript.addWord(wordList[i],howManyTimes); //random directions
            }
    PuzzleMakerScript.fillBlanks("CAT");
    PuzzleMakerScript.show();
}

example1();

example2();

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
    PuzzleMakerScript.fillBlanks(" ");
    PuzzleMakerScript.show();
}


function example2() {

    PuzzleMakerScript.emptyChar='.';
    PuzzleMakerScript.init(15,15);
    PuzzleMakerScript.reuseLetters=true;

        var wordList=["SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON"];
        var howManyTimes = 1;
            for (var i=0;i<wordList.length;i++) {
                var results=PuzzleMakerScript.addWord(wordList[i],howManyTimes); //random directions
                //console.log(results);
            }
            
    PuzzleMakerScript.fillBlanks(" ");//PuzzleMakerScript.emptyChar);
    PuzzleMakerScript.show();
}

function example3() {
    
    var hidden=[];
    
    PuzzleMakerScript.emptyChar='.';
    PuzzleMakerScript.init(35,35);   
    
    //PuzzleMakerScript.addWord("sheldon",1); 
    //PuzzleMakerScript.show();
    
    for (var i=0;i<9999;i++){
    var objResult =  PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(),PuzzleMakerScript.randSY(),"SHELDON",true,true);
    // var objResult =  PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(),PuzzleMakerScript.randSY(),"amanda",false);
    // var objResult =  PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(),PuzzleMakerScript.randSY(),"1234567",false);
     if (objResult.thePath.length>0) {//console.log(JSON.stringify(objResult));
     hidden.push(objResult);
     if (hidden.length>=47) break;
         
     }
    }
    
    
   PuzzleMakerScript.show();
   console.log(JSON.stringify(hidden.length));
   

}

//example1();

//example2();

example3();

// wowo todo   hide every engish word in a big puzzle

//todo verify no two paths in create come back the same
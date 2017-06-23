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

    PuzzleMakerScript.emptyChar='.';
    PuzzleMakerScript.init(15,15);
    PuzzleMakerScript.reuseLetters=true;
    

        var wordList=["SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON","SHELDON","AMANDA","AMANDA","SHELDON"];
        var howManyTimes = 1;
            for (var i=0;i<wordList.length;i++) {
                var results=PuzzleMakerScript.addWord(wordList[i],howManyTimes); //random directions
            }
    PuzzleMakerScript.fillBlanks(PuzzleMakerScript.emptyChar);//PuzzleMakerScript.emptyChar);
    PuzzleMakerScript.show();
    
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // console.log('this part path creation not done, check todo in index.js');
    
    // PuzzleMakerScript.reuseLetters=false;
    
    // var sx=PuzzleMakerScript.randSX();
    // var sy=PuzzleMakerScript.randSY();
    
    // var newPath = PuzzleMakerScript.createPath(sx,sy,"AMANDA");
    
    // //var thePath = newPath.thePath;
    
    // if (newPath.thePath!=='undefined') {
        
    // for (var i=0;i<newPath.thePath.length;i++) {
    //     PuzzleMakerScript.set(newPath.thePath[i].sx,newPath.thePath[i].sy,newPath.thePath[i].letter);
    // }
    
    // }
    
    // PuzzleMakerScript.show();
    
    // console.log(JSON.stringify(newPath));
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

example1();

example2();

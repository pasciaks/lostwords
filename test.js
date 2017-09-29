//todo Bring use of pms into server and use client to run server puzzle maker

//todo Host lostwords as a web service.  http://lostwords.org/request/puzzle/init  (get/post, etc)

var PuzzleMakerScript = require("puzzlemakerscript");

function example1() {

    PuzzleMakerScript.init(15, 15);
    var wordList = ["SMART", "SIGN", "CAT", "DOG", "PIZZA", "CAR", "TREE"];
    var howManyTimes = 1;
    for (var i = 0; i < wordList.length; i++) {
        (PuzzleMakerScript.addWord(wordList[i], howManyTimes, 1, 1)); //set directions
        (PuzzleMakerScript.addWord(wordList[i], howManyTimes, -1, 1));
        (PuzzleMakerScript.addWord(wordList[i], howManyTimes, 1, -1));
        (PuzzleMakerScript.addWord(wordList[i], howManyTimes, -1, -1));
    }
    PuzzleMakerScript.fillBlanks(" ");
    PuzzleMakerScript.show();
}


function example2() {

    PuzzleMakerScript.emptyChar = '.';
    PuzzleMakerScript.init(15, 15);
    PuzzleMakerScript.reuseLetters = true;
    
    var results = [];

    var obj = {};
    var wordList = ["SHELDON", "DAYTONA", "SEBASTIAN", "BEACH","SHELDON", "DAYTONA", "SEBASTIAN", "BEACH","SHELDON", "DAYTONA", "SEBASTIAN", "BEACH","SHELDON", "DAYTONA", "SEBASTIAN", "BEACH","SHELDON", "DAYTONA", "SEBASTIAN", "BEACH"];
    var howManyTimes = 1;

    for (var i = 0; i < wordList.length; i++) {
        
       // results.push(PuzzleMakerScript.addWord(wordList[i], howManyTimes)); //random directions
        
        obj = PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(), PuzzleMakerScript.randSY(), wordList[i], false, true, 0);         
        //console.log(obj);
        
        if (obj.result==true)         results.push(obj);
    }
    
    console.log(results.length + " " + wordList.length);

    PuzzleMakerScript.fillBlanks("."); //PuzzleMakerScript.emptyChar);
    PuzzleMakerScript.show();
    console.log(JSON.stringify(results));
}

function example3(value) {

    var hidden = [];

    PuzzleMakerScript.emptyChar = ' ';
    PuzzleMakerScript.init(18,18);

    //PuzzleMakerScript.addWord("sheldon",1); 
    //PuzzleMakerScript.show();
    
    var theword="LOSTWORDS.ORG";
    
    var percentageofboardfilled = .35;
    
    var howmany = Math.floor ( (PuzzleMakerScript.cols*PuzzleMakerScript.rows) / theword.length * percentageofboardfilled);
    
    console.log(howmany);
    
    howmany=12; // ********* <------- overrides above

    for (var i = 0; i < 9999; i++) {
        //var objResult =  PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(),PuzzleMakerScript.randSY(),"abcdefghijklm",false,true); 
        //var objResult =  PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(),PuzzleMakerScript.randSY(),"123456789",false,true,70);
                                                                                                                // reuse  // change dir  // dirchange percent
        var objResult = PuzzleMakerScript.createPath(PuzzleMakerScript.randSX(), PuzzleMakerScript.randSY(), theword, false, true, 0); 
        if (objResult.thePath.length > 0) {
            //console.log(JSON.stringify(objResult));
            hidden.push(objResult);
            PuzzleMakerScript.show();
            if (hidden.length >= howmany) break;

        }
    }


    PuzzleMakerScript.show();
    console.log(JSON.stringify(hidden.length));


}

//example1();

example2();

//example3();

// wowo todo   hide every engish word in a big puzzle

// todo verify no two paths in create come back the same

// todo create path using presets already built according to style. ie.  right turns only

// _ _ U N D R _ _ _ _
// _ _ O P I I _ _ _ _
// _ _ R S R G _ _ _ _
// _ _ A L A H _ _ _ _
// _ _ _ _ _ T _ _ _ _

// SPIRALAROUNDRIGHT

// MAYBE ZIGZAG ONE BEND AT HALF WAY MARK

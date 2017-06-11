var PuzzleMakerScript = require("puzzlemakerscript");

PuzzleMakerScript.init(15,15);

    var wordList=["SHELDON","AMANDA","CAT","DOG","PIZZA","CAR","TREE"];
    
    for (var i=0;i<wordList.length;i++){
        PuzzleMakerScript.addWord(wordList[i],9);
    }

PuzzleMakerScript.show();
var PuzzleMakerScript = require("puzzlemakerscript");

    PuzzleMakerScript.init(8,8);
    
    PuzzleMakerScript.set(5,5,"T");
    PuzzleMakerScript.set(5,4,"E");
    PuzzleMakerScript.set(4,4,"S");
    PuzzleMakerScript.set(3,3,"T");
    
    for (var i=0;i<8;i++){
        PuzzleMakerScript.set(i,0,"*");
        PuzzleMakerScript.set(i,7,"=");
    }   
    
    for (var i=0;i<8;i++){
        PuzzleMakerScript.set(0,i,"@");
        PuzzleMakerScript.set(7,i,"^");
    }     
    
    PuzzleMakerScript.show();
var PuzzleMakerScript = require("puzzlemakerscript");

    PuzzleMakerScript.init(5,5);

    PuzzleMakerScript.create(1,0,"SHELDON",success,failure);
    
    function success() {
        console.log("success");
        
        PuzzleMakerScript.show();
    
    }
    function failure() {
        console.log("fail");
    }
    

var PuzzleMakerScript = require("puzzlemakerscript");

PuzzleMakerScript.init(125,125,completed);

function completed(results) {
    
    console.log(JSON.stringify(results));
    
    console.log("char at 0,0 "  + PuzzleMakerScript.get(0,0));
        
    console.log("char at 1,1: "  + PuzzleMakerScript.get(1,1));
    
    var line="";
    
    for (var r=0;r<PuzzleMakerScript.rows;r++){
        for (var c=0;c<PuzzleMakerScript.cols;c++) {
            line += PuzzleMakerScript.get(c,r) + "";
        }
        console.log(line);line="";
    }
    
}
   
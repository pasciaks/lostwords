var PuzzleMakerScript = require("puzzlemakerscript");

    //  PuzzleMakerScript.init(8,8);
    
//     function callback() {
//         console.log("callback:" +Date.now().toString());
//     }
    
//     console.log("done:" +Date.now().toString());
    
//     PuzzleMakerScript.set(5,5,"T");
//     PuzzleMakerScript.set(5,4,"E");
//     PuzzleMakerScript.set(4,4,"S");
//     PuzzleMakerScript.set(3,3,"T");
    
//     for (var i=0;i<8;i++){
//         PuzzleMakerScript.set(i,0,"*");
//         PuzzleMakerScript.set(i,7,"=");
//     }   
    
//     for (var i=0;i<8;i++){
//         PuzzleMakerScript.set(0,i,"@");
//         PuzzleMakerScript.set(7,i,"^");
//     }     
    
//     PuzzleMakerScript.show();
    
//     PuzzleMakerScript.setDirection(0,0,1,1,"TEST");

// PuzzleMakerScript.show();

function randRange(min, max) // inclusive random number in range of min-max
{
    Math.random(Date.now());
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doit(word){
    var sx=randRange(0,PuzzleMakerScript.cols-1);
    var sy=randRange(0,PuzzleMakerScript.rows-1);
    
    console.log("x:"+sx+",y:"+sy);

    
    var dx=1-randRange(0,2);
    var dy=1-randRange(0,2);
    
    if (dx==0) if (dy==0) dx=1;
         console.log("dx:"+dx+",dy:"+dy);
    tryit(sx,sy,dx,dy,word)   ;
}

var words=0;

    function tryit(sx,sy,dx,dy,word) {
    
        if (PuzzleMakerScript.checkDirection(sx,sy,dx,dy,word)==true) {
            PuzzleMakerScript.setDirection(sx,sy,dx,dy,word,function(data) {
               PuzzleMakerScript.show();
               words++;
            });
            
        }
    
    }
    
    PuzzleMakerScript.init(18,18);
    
    for (var i=0;i<9999;i++) {
        doit("AMAZING");
    }

console.log("words hidden:" + words);

PuzzleMakerScript.show();

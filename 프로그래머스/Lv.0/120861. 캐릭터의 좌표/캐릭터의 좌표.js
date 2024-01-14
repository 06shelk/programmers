function solution(keyinput, board) {
    var upAndDown = 0;
    var leftAndRight = 0;
    
    var maxHeight = Math.floor(board[1]/2); //height
    var maxwidth = Math.floor(board[0]/2); //width
    
    for(var i=0; i<keyinput.length; i++) {
        if(maxHeight < upAndDown) upAndDown = maxHeight;
        if(maxwidth < leftAndRight) leftAndRight = maxwidth;
        if(-1 * maxHeight > upAndDown) upAndDown = -1* maxHeight;
        if(-1 * maxwidth > leftAndRight) leftAndRight = -1* maxwidth;
        
        
        switch(keyinput[i]) {
            case "left": leftAndRight--; break;
            case "right": leftAndRight++; break;
            case "up": upAndDown++; break;
            case "down": upAndDown--; break;
        } 

    }
    
    if(Math.abs(maxHeight) < Math.abs(upAndDown)){
        upAndDown = (upAndDown < 0)?  -1 * maxHeight: maxHeight;

    }
    if(Math.abs(maxwidth) < Math.abs(leftAndRight)){
         leftAndRight = (leftAndRight < 0) ?  -1 * maxwidth: maxwidth;
    }
    
    return [leftAndRight ,upAndDown];
}
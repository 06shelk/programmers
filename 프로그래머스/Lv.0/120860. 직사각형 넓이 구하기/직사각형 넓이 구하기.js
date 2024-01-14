function solution(dots) {
    var answer = 0;
    var x=0, y=0;
    var maxX = -256;
    var minX = 256;
    
    var maxY = -256;
    var minY = 256;
    
    for(var i=0; i<dots.length; i++) {
        if(maxX < dots[i][0]) { maxX = dots[i][0]; }
        if(minX > dots[i][0]) { minX = dots[i][0]; }
        
        if(maxY < dots[i][1]) { maxY = dots[i][1]; }
        if(minY > dots[i][1]) { minY = dots[i][1]; }
    }
    
    x = maxX - minX;
    y = maxY - minY;
    
    return x*y;
}
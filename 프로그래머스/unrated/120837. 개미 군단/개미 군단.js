function solution(hp) {
    var answer = 0;
    
    if(hp>4) {
        if(hp%5==0) answer = hp/5 + 0
        if(hp%5==1) answer = hp/5 + 1
        if(hp%5==2) answer = hp/5 + 2
        if(hp%5==3) answer = hp/5 + 1
        if(hp%5==4) answer = hp/5 + 2
        
    }else {
        if(hp == 0) answer = 0;
        if(hp == 1) answer = 1;
        if(hp == 2) answer = 2;
        if(hp == 3) answer = 1;
        if(hp == 4) answer = 2;
    }
    
    return parseInt(answer);
}
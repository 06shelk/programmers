function solution(x1, x2, x3, x4) {
    //∧ and   v or
    
    var answer = true;
    var y1 = true, y2 = true;
    
    if(x1 == false && x2 == false) y1 = false;
    if(x3 == false && x4 == false) y2 = false;   
    if(y1 == false ||  y2 == false) answer = false;

    
    return answer;
}
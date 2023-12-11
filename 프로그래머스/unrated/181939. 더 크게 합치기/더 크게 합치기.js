function solution(a, b) {
    var answer = 0;
    var ab = (a + "" + b).toString();
    var ba = (b + "" + a).toString();
            
    answer = (ab>ba) ? ab:ba;
    
    return Number(answer);
}
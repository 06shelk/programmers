function solution(n) {
    var answer = 0;
    var num = 1;
    
    for(var i=1; i<=10;i++) {
        num *= i;
        if(n>=num) answer = i;
    }
    
    return answer;
}
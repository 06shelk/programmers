function solution(a, b) {
    var answer = 0;
    
    if(a%2==1 && b%2==1) {
        answer = Math.pow(a, 2) + Math.pow(b, 2);
    }else if(a%2==1 || b%2==1) {
        answer = 2 * (a+b);
    }else {
         answer = Math.abs(a -b);
    }
    
    return answer;
}
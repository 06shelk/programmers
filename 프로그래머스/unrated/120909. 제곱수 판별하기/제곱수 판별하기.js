function solution(n) {
    var answer = 2;
    
    for(var i = 1; i<=n; i++) {
        if(i*i == n) {
            answer = 1
        }
    }
    
    return answer;
}
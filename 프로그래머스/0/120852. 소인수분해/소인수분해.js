function solution(n) {
    var answer = [];
    
    for(var i=2; i<=n; i++) {
        while (n % i === 0) {     
            n /= i;
            answer.push(i);
        }  
    }
        
    return [...new Set(answer)];
}
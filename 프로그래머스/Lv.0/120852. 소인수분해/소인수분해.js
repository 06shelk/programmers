function solution(n) {
    var answer = [];
    
    
    for(var i=2; i<=n; i++) {
        while (n % i === 0) {
            answer[i] = i;
            n /= i;
        }   
    answer = answer.filter(e => e !== null && e !== undefined);
    }
    
    answer.sort((a,b)=>a-b);
    
    const set = new Set(answer);
    answer = Array.from(set);
        
    return answer;
}
function solution(n) {
    var answer = [];
    
    
    for(var i=2; i<=n; i++) {
        while (n % i === 0) {
           
            n /= i;
             answer.push(i);
        }   

    }
    
   
    
    const set = new Set(answer);
    answer = Array.from(set);
        
    return answer;
}
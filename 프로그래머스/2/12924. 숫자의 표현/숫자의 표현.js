function solution(n) {
    var answer = [];
;    
    for(var j=1; j<=n; j++) {
        var sum1 = 0;
        var row = [];
        
        for(var i= j; i<=n; i++) {
            sum1+= i;
            row.push(i);
            
            if (sum1 === n) {
                answer.push([...row]);
                break;
            } else if (sum1 > n) {
                break; 
            }
              
        } 
    }
    
    return answer.length;
}
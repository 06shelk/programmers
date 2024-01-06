function solution(numbers, k) {
    var answer = 1;
    
    for(var i=1; i<k; i++) {
        answer += 2;
        if(numbers.length < answer) answer = answer -numbers.length;
        
    }
    
    // answer =answer -2;
    // if(answer<0) answer = numbers.length - Math.abs(answer);
     
    return answer;
}
function solution(binomial) {
    var answer = 0;
    
    var words = '';
    
    if(binomial.includes('+')) {
        words = binomial.split(' + ');
        answer = Number(words[0]) + Number(words[1]); 
        
    }else if(binomial.includes('-')) {
        words = binomial.split(' - ');
        answer = words[0] - words[1]; 
        
    }else {
        words = binomial.split(' * ');
        answer = words[0] * words[1]; 
    }
    
    return answer;
}
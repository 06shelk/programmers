function solution(num, k) {
    var answer = '';
    
    num = num.toString();
    
    for(var i=0; i<num.length; i++) {
        if(num[i] == k) {
            answer += i+1; 
            break;
        }
    }
    
    if(answer === '') {
        answer = -1;
    }
    
    
    return parseInt(answer);
}
function solution(s) {
    var answer = '';
    
    for(var i=0; i<s.length; i++) {
        if(!s.slice(i+1).includes(s[i]) && !s.slice(0,i).includes(s[i])) answer += s[i];
    }
    
    return answer.split('').sort().join('');
}
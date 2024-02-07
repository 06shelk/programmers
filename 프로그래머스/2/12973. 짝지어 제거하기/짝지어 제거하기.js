function solution(s) {
    var answer = [];

    for(var i=0; i< s.length; i++) {
        if( answer.length > 0 && answer[answer.length - 1] == s[i]) {
            answer.pop();
        }else {
            answer.push(s[i]);
        }
    }
        
    return answer.length == 0 ? 1 : 0;
}
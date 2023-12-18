function solution(myString) {
    var answer = '';
    
    for(var i=0; i< myString.length; i++) {
        if('a' == myString[i] || 'A' == myString[i]) {
            answer += myString[i].toUpperCase();
        }else {
            answer += myString[i].toLowerCase();
        }
    }
    
    return answer;
}
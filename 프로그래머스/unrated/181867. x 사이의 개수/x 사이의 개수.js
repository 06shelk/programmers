function solution(myString) {
    var answer = [];
    
    var words = myString.split("x");
    
    for(var i=0; i< words.length; i++) {
        answer.push(words[i].length); 
    }
    
    return answer;
}
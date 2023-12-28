function solution(myString) {
    var answer = [];
    
    const words = myString.split('x');

    for(var i =0; i<words.length; i++) {
        if(words[i] !== "") {
            answer.push(words[i]);
        }
    }
    
    return answer.sort();
}
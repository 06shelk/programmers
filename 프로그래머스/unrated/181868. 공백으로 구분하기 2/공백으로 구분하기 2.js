function solution(my_string) {
    var answer = [];
    
    const words = my_string.split(' ');
    
    for(var i =0; i<words.length; i++) {
        if(words[i] !== "") {
            answer.push(words[i]);
        }
    }
    
    return answer;
}
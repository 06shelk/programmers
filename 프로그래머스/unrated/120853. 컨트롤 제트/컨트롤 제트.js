function solution(s) {
    var answer = 0;
    
    var words = s.split(' ');
    
    for(var i=0; i<words.length; i++) {
        if(words[i] == "Z") {
            answer -= Number(words[i - 1]); 
        }else {
            answer += Number(words[i]); 
        }
    }
    
    return answer;
}
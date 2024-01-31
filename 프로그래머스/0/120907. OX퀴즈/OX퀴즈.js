function solution(quiz) {
    var answer = [];
    
    for(var i=0; i< quiz.length; i++) {
        const s = quiz[i].split(" ");
        const n1 = parseInt(s[0]);
        const n2 = parseInt(s[2]);
        
        switch(s[1]) {
        case "+" :
            answer.push( (n1 + n2) == s[4] ? "O": "X"); break;
        case "-" :
            answer.push( (n1 - n2) == s[4] ? "O": "X"); break;
        }
    }
    
    return answer;
}
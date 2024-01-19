function solution(score) {
    var answer = [];
    
    for(var i=0; i<score.length; i++) {
        answer.push( (score[i][0] + score[i][1])/2);
    }
    
    let sorted = answer.slice().sort((a,b)=>b-a);

    return answer.map(v=>sorted.indexOf(v)+1);
}
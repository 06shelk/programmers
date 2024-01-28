function solution(rank, attendance) {
    var answer = [];

    var array = [...rank].sort((a,b) => a-b);
    
    for(var i=0; i<rank.length; i++) {
          if(attendance[rank.indexOf(i+1)] == true) answer.push(rank.indexOf(i+1));
    }
    
    return 10000 * answer[0] + 100 * answer[1] + answer[2];
}
function solution(answers) {
    var answer = [];
    // answers= [1, 1, 1, 1, 1, 1];
    // // 기댓값 〉 [1, 3]
    
    var score = [0,0,0];
    var an1 = [1, 2, 3, 4, 5];
    var an2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var an3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(var i=0; i<answers.length; i++) {
        if(an1[i % an1.length] == answers[i]) score[0]++;
        if(an2[i % an2.length] == answers[i]) score[1]++;
        if(an3[i % an3.length] == answers[i]) score[2]++;
    }
    
    var max = Math.max(...score);
    for(var i=0; i<score.length; i++) {
        if(score[i] == max) {
            answer.push(i+1);
        }
    }
    
    return answer;
}
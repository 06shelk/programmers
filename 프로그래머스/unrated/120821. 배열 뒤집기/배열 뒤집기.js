function solution(num_list) {
    var answer = [];
    
     for(var a = num_list.length-1; a >= 0; a--) {
        answer.push(num_list[a]);
    }
    
    return answer;
}
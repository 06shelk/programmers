function solution(todo_list, finished) {
    var answer = [];
    
    for(var i =0; i<finished.length; i++) {
        if(finished[i]=== false) answer.push(todo_list[i]);
    }
    
    return answer;
}
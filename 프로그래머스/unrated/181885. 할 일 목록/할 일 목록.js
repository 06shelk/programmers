function solution(todo_list, finished) {
    var answer = [];
    
    var finCheck = [];
    
    for(var i =0; i<finished.length; i++) {
        if(finished[i]=== false) finCheck.push(todo_list[i]);
    }
    
    return finCheck;
}
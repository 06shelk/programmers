function solution(before, after) {
    var answer = 1;
    
    var beforeArray = before.split("").sort();
    var afterArray = after.split("").sort();
    
    for(var i=0; i< afterArray.length; i++) {
        if(beforeArray[i] != afterArray[i]) {
            answer = 0;
        }
    }
    
    return answer;
}
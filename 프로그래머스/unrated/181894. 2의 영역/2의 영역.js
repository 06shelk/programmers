function solution(arr) {
    var answer = [];

    var temp = []; 

    for (var i = 0; i <= arr.length; i++) {
        if(arr[i] == 2) temp.push(i);
    }
    
    if(temp.length < 1){
        answer.push(-1);
    }else if(temp.length == 1) {
        answer.push(2);
    }else {
        answer = arr.slice(Math.min(...temp), Math.max(...temp)+1);
    }

    return answer;
}
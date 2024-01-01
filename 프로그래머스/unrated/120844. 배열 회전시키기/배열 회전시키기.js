function solution(numbers, direction) {
    var answer = [...numbers];
    
    if(direction == "right") {
        answer.pop(); //배열의 맨 끝에 값을 제거한다.
        answer.unshift(numbers[numbers.length-1]); //배열의 맨 앞에 값을 추가한다.
    } else {
        answer.shift(); //배열의 맨 앞에 값을 제거한다.
        answer.push(numbers[0]); //배열의 맨 끝에 값을 추가한다.
    }
    

    return answer;
}
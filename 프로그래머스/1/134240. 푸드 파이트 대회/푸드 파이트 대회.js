function solution(food) {
    var answer = '', reverseStr = '';
    for(var i= 1; i< food.length; i++) {
        answer += i.toString().repeat(food[i]/2);
    }
    reverseStr = answer.split("").reverse().join("");
    
    return answer + 0 + reverseStr;
}
function solution(money) {
    var answer = [];
    
    cup = money / 5500
    rest = money % 5500
    
    answer.push(parseInt(cup), rest)
    
    return answer;
}
function solution(my_str, n) {
    var answer = [];
    
    var num1 = 0, num2 = n;
    
    for(var i=0; i< (my_str.length)/n; i++) {
        answer.push(my_str.slice(num1, num2));
        num1 += n;
        num2 += n;
    }
    
    return answer;
}
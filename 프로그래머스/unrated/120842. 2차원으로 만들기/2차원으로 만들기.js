function solution(num_list, n) {
    var answer = [];
    var num1 = 0;
    var num2 = n;
    
    for(var i=0; i<num_list.length/n; i++) {
        answer.push(num_list.slice(num1, num2));
        num1 += n;
        num2 += n;
    }
    
    return answer;
}
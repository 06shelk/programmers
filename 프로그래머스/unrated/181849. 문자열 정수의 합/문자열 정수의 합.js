function solution(num_str) {
    var answer = 0;
    
    for(element of num_str) answer += Number(element);
    
    return answer;
}
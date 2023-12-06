function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a,b)=>a-b);
    
    last = numbers.length-1;
    
    answer = numbers[last] * numbers[last-1];
    
    return answer;
}
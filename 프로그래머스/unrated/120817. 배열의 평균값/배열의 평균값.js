function solution(numbers) {
    var answer = 0;

    var total = 0;
    
    for(var i=0; i<numbers.length; i++) {
        total += numbers[i];
    }
    
    answer = total / numbers.length;
    
    return answer;
}
function solution(numbers) {
    var answer = 0;
    
    max = -100000000;
    
    for(var i =0; i<numbers.length; i++) {
        for(var j =0; j<numbers.length; j++) {
            if(i!=j) { // 같은 수를 곱하지 않기 위해
                if(max < numbers[i] * numbers[j]) {
                    max = numbers[i] * numbers[j];
                }
            }
        }
    }
    
    return answer = max;
}
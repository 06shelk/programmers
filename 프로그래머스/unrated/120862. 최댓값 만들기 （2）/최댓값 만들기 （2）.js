function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a,b) => a-b);
    
    max =  numbers[0] * numbers[1];
    
    for(var i =0; i<numbers.length; i++) {
        for(var j = i + 1; j<numbers.length; j++) {
            if(i!=j) { // 같은 수를 곱하지 않기 위해
                if(max < numbers[i] * numbers[j]) {
                    max = numbers[i] * numbers[j];
                }
            }
        }
    }
    
    return answer = max;
}
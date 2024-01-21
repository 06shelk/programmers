function solution(number) {
    var answer = 0;
    
    for(var i=0; i<number.length; i++) {
        for(var j=0; j< i; j++) {
           for(var k=0; k< j; k++) {
               if(0 == number[i]+ number[j] + number[k] ) answer++;
            }
        }
    }
    
    return answer;
}
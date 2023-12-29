function solution(number) {
    var answer = 0;
    
    var sum =0;
    
    for(var i=0; i<number.length; i++) {
        sum += Number(number[i]);
    }
    
    
    return sum%9;
}
function solution(array, n) {
    var answer = 0;
    
    var count = 0;
    
    for(var i =0; i < array.length; i++) {
        if(n == array[i]) {
            count++;
        }
    }
    
    return answer = count;
}
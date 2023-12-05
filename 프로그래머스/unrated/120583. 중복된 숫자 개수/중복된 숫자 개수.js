function solution(array, n) {
    var answer, count = 0;
    
    for(var i =0; i < array.length; i++) {
        if(n == array[i]) {
            count++;
        }
    }
    
    return answer = count;
}
function solution(array, n) {
    var answer = 0;
    var num = [];
    
    array.sort((a,b) => a-b);
    
    for(var i=0; i<array.length; i++) {
        num[i] = (array[i] >= n) ? num[i] = array[i] - n: num[i] = n - array[i];
    }
    
    answer = Math.min(...num); 
    
    return array[num.indexOf(answer)];
}
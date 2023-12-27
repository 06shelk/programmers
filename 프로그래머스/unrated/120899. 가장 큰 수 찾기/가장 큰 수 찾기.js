function solution(array) {
    var answer = [];
    
    var max = 0, idx = 0;
    
    for(var i =0; i<array.length; i++) {
        if(max < array[i]) {
            max = array[i];
            idx = i;
        }
    }
    
    return [max, idx];
}
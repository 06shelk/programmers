function solution(array) {
    var temp = new Array(1001).fill(0); 

    for (var i = 0; i < array.length; i++) {
        temp[array[i]]++;
    }
    
    var max = Math.max(...temp);
    
    if (temp.filter(value => value === max).length > 1) {
        return -1;
    }
    
    return temp.indexOf(max);
}

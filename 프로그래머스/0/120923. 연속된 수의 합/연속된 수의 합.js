function solution(num, total) {
     
    for(var i = -50; i<= total; i++) {
        var arr = [];
        var acc = 0;
        
        for(var j= i; j< i+num; j++) {
            arr.push(j);
            acc += j;
            if(arr.length == num && acc  == total) {
                return arr;
            }
        }
    }
    
    return arr;
}
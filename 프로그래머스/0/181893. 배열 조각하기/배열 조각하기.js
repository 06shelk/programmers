function solution(arr, query) {
    
    for(var i=0; i<query.length; i++) {
        arr = (i%2==0) ?arr.slice(0, query[i]+1) : arr.slice(query[i]);
    }
    
    return arr;
}
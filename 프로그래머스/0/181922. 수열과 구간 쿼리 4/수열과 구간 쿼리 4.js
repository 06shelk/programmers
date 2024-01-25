function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i< queries.length; i++){
        for(var j=0; j<arr.length; j++) {
            const [s, e, k] = queries[i];
            if(s <= j && j<=e && j%k ==0) arr[j]++;
        }
    }
    
    return arr;
}
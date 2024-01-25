function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i< queries.length; i++){
        for(var j=0; j<arr.length; j++) {
            const query = queries[i];
            const [s, e, k] = query;
            if(s <= j && j<=e && j%k ==0) arr[j]++;
        }
    }
    
    return arr;
}
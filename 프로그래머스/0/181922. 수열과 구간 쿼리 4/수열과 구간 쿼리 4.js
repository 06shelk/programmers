function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i< queries.length; i++){
        const [s, e, k] = queries[i];
        for(var j=s; j<= e; j++) {
            if(j%k ==0) arr[j]++;
        }
    }
    
    return arr;
}
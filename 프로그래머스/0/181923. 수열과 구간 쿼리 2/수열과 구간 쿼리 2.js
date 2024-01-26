function solution(arr, queries) {
    var answer = [];
    var array = [];
    
   for(var i=0; i< queries.length; i++){
       var subArray = [];  
       for(var j=0; j<arr.length; j++) {
            const [s, e, k] = queries[i];
            if(s <= j && j<=e && k < arr[j]) {
                subArray.push(arr[j]);
            }
        }
       subArray = subArray.sort((a,b) => a-b);
       array.push(subArray);
    }
    
    for(var i=0; i<array.length; i++) {
        if(array[i][0] == null){
            answer.push(-1);
        }else {
            answer.push(array[i][0]);
        }
    }
    
    
    return answer;
}
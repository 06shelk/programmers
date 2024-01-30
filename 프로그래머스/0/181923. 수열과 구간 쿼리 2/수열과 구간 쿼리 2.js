function solution(arr, queries) {
    var answer = [];
    var array = [];
    
   for(var i=0; i< queries.length; i++){
       var subArray = [];
       
       const [s, e, k] = queries[i];
       for(var j=s; j<=e; j++) {
            
            if(k < arr[j]) {
                subArray.push(arr[j]);
            }
        }

       array.push(subArray.sort((a,b) => a-b));
       
       
       if(array[i][0] == null){
            answer.push(-1);
        }else {
            answer.push(array[i][0]);
        }
    }
   
    
    
    return answer;
}
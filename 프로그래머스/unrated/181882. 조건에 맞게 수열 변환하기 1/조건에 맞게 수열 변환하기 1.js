function solution(arr) {
    var answer = [];
    
    var val = 0;
    
    for(var i=0; i<arr.length; i++) {
        
        if(arr[i] >= 50 && arr[i] % 2== 0) {
            val = arr[i]/2;
            
        } else if (arr[i] < 50 && arr[i] % 2== 1){
            val = arr[i] * 2;;
            
        }else {
           val = arr[i]; 
        }

        answer.push(val);
    }
    
    return answer;
}
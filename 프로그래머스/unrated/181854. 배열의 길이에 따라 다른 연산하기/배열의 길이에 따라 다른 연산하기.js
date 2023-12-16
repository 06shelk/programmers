function solution(arr, n) {
    var answer = [];
    
    if(arr.length % 2 ==0) { //짝수라면
        for(var i=0; i<arr.length; i++) {
            if(i%2==1){
                answer.push(arr[i] + n);
            }else {
               answer.push(arr[i]);
            } 
        }
    }else { //홀수라면
        for(var i=0; i<arr.length; i++) {
            if(i%2==0){
                answer.push(arr[i] + n);
            }else {
               answer.push(arr[i]);
            }
            
        }
    }
    return answer;
}
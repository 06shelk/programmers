function solution(arr, idx) {
    var answer = -1;
    
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == 1 && i>=idx) {
            answer = i;
            break;
        }
    }
    
    return answer;
}
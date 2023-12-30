function solution(a, d, included) {
    var answer = 0;
    
    var arr = [];
    
    for(var i=0; i<included.length; i++) {
        arr.push(a+d*i);
        
        if(included[i] == true) {
            answer += arr[i];
        }
    }
    
    return answer;
}
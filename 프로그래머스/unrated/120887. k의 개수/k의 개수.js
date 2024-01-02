function solution(i, j, k) {
    var answer = 0;
    
    for(var i=i; i<=j; i++) {
        if(i.toString().includes(k.toString())) {
            answer += i.toString().split(k).length - 1;
        }
    }
    
    return answer;
}
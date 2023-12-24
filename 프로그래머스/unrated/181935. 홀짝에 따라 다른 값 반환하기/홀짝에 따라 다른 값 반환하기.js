function solution(n) {
    var answer = 0;
    
    if(n%2==0){ //짝수이면
        for(var i=2; i<=n; i= i+2){
            answer += i*i;
        }
            
    }else { //홀수이면
        for(var i=1; i<=n; i=i+2){
            answer += i;
        }            
    }
    
    return answer;
}
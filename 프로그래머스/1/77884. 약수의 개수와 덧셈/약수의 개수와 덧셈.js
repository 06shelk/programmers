function solution(left, right) {
    
    var num = 0, answer = 0;
    var cnt = new Array(right).fill(0); 

    for(var j=left; j<=right; j++) {
        num = 0;
        for(var i=1; i<=j; i++) {
            if(j%i==0) num++;
        }
        cnt[j] = num;  
        
        answer = (num%2==0)? answer += j:answer -= j;
    }
    
    
    return answer;
}
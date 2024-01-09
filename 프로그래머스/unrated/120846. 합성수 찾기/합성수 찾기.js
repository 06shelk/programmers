function solution(n) {
    var num = 0;
    var cnt = new Array(n+1).fill(0); 
    var answer = 0;
    
    for(var j=1; j<=n; j++) {
        num = 0;
        for(var i=2; i<=n; i++) {
            if(j%i==0) num += 1;
        }
        cnt[j] = num;
        
        if(cnt[j] > 1) answer++;   
    }

    return answer;
}
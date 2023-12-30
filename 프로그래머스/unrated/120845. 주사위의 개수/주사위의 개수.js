function solution(box, n) {
    var answer = 0;
    
    var cnt = [0,0,0];
    
    for(var i=0; i<box.length; i++) {
        for(var j=1; j<= box[i]; j++) {
            if(n*j <= box[i]) cnt[i]++;
        }
    }
    
    return cnt[0] * cnt[1] * cnt[2];
}
function solution(s1, s2) {
    var answer = [];
    
    var cnt = 0;
    
    for(var i =0; i<s1.length; i++) {
        for(var j=0; j<s2.length; j++) {
            if(s1[i] == s2[j]) {
                cnt++;
            }
        }  
    }

    return cnt;
}
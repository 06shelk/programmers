function solution(str1, str2) {
    var answer = 2;
    
    var strTemp = "";
    
    var cnt = 0;
    
    for(var i = 0; i<str1.length; i++) {
        for(var j = cnt; j<str2.length + cnt; j++) {
            strTemp += str1[j]; 
        }  
        cnt++;
        
        if(strTemp == str2) {
            answer = 1;
        }
        strTemp = '';
    }
    
    return answer;
}
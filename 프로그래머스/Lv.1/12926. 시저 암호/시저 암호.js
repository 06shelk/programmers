function solution(s, n) {
    var answer = '';
    var temp ='';
      
    for(var i=0; i<s.length; i++) {
        
        //공백일 때 넘어가게
        if(s[i] == " ") {
            answer += " ";
            continue;
        }
        
        temp = s.charCodeAt(i); //변환된 값
         
        //대문자 65 ~ 90
        if(temp >= 65 && temp <= 90) {
            if(temp+n > 90) {
                temp = (temp+n - 65) % 26 + 65;
                answer += String.fromCharCode(temp);
            }else {
                 answer += String.fromCharCode(temp +n);
            }
          
        }
         
        //소문자 97 ~ 122
        if(temp >= 97 && temp <= 122){
            if(temp+n < 122) {
                answer += String.fromCharCode(temp +n);
            }else {
                temp = (temp+n - 97) % 26 + 97;
                answer += String.fromCharCode(temp);
            }
        }
        
    }
    
    return answer;
}
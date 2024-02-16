function solution(s) {
    var answer = [];
    
    for(var i= 0; i<s.length; i++) {
        var temp = s.split("").slice(0, i);
        let count = 0;
        
        if(!temp.includes(s[i])) {
            answer.push(-1);
        }else {
           
            for(let j = i - 1; j >= 0; j--){
            count++;
               if(s[i] == s[j]) {
                    answer.push(count);
                    break;
               }
           }
        }
    }
    
    
    
    return answer;
}
function solution(s){
    var answer = true;
    var chk = 0;

    if(s[0] == ")" || s[s.length-1] == "(") return false;
    
    for(var i=0; i<s.length; i++) {
        if(s[i] == "(") chk++;
        if(s[i] == ")") chk--;
        
        if(chk < 0) return false; 
    }
    
    if(chk > 0) return false; 
    
    return answer;
}
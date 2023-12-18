function solution(n_str) {
    var answer = '';
    
    if(n_str[0] == "0") {
        for(var i =1; i<n_str.length; i++) {
            if(n_str[i] !== n_str[i-1]) answer += n_str[i]; 
        }
        
    }else {
        answer += n_str;
    }
    
    return answer;
}
function solution(myString, pat) {
    var answer = 0;
    
    for(var i =0; i<myString.length; i++) {
        if(myString.slice(i, i+ pat.length).includes(pat)) answer += 1;
        
    }
    
    return answer;
}
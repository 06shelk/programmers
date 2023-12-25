function solution(myString, pat) {
    var answer = 0;
    
    answer = (myString.toLowerCase().includes(pat.toLowerCase()) === true) ? 1 : 0;
    
    return answer;
}
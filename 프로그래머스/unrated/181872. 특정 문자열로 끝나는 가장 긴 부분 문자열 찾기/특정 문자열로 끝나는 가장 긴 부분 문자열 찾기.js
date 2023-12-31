function solution(myString, pat) {
    var answer = '';
    
    var num  =  myString.lastIndexOf(pat);
    answer = myString.slice(0, num + pat.length);

    return answer;
}
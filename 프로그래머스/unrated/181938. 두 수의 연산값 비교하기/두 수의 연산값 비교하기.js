function solution(a, b) {
    var answer = 0;
    
    var number = parseInt(a.toString() + b.toString());
    var Multi = a * b* 2; 
    
    answer = number> Multi? number : Multi;
   
    return answer;
}
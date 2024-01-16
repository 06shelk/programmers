function solution(s) {
    var answer = '';
    
    s= s.split(" ");
    
    var max = -10000;
    var min = 10000;
    
    for(var ele of s) {
        if(ele > max) max = Number(ele);
        if(ele < min) min = Number(ele);
    }
    
    answer = min + " " + max;
    return answer;
}
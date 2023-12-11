function solution(a, b, flag) {
    var answer = 0;
    
    var c = true; 
        
    if(flag == c) {
        answer =  a + b;
    }else {
        answer =  a - b;
    }
          
    return answer;

}
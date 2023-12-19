function solution(a, b, c) {
    var answer = 0;
    
    var abcplus = a + b +c;
    var abcPow = Math.pow(a, 2)+Math.pow(b, 2)+Math.pow(c, 2)
    var abcPow3 = Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3)
    
    if(a==b&&b==c){
            answer = abcplus * abcPow* abcPow3; 
    }else if(a==b||b==c||a==c){
             answer = abcplus * abcPow;   
    }else {
             answer = abcplus;
    }
        
    return answer;
}
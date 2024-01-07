function solution(balls, share) {
    var answer = 0;
    
    var num1 =1; // 분모
    var num1_1 =1; // 분모
    var num2 =1; // 분자
    
    for(var i=1;  i<=balls-share; i++) { num1 *= i;}
    for(var i=1;  i<=share; i++) { num1_1 *= i;}
    num1 = num1 * num1_1; // 분모값
    
    for(var i=1;  i<=balls; i++) { num2 *= i; } //분자값
    
    answer = num2/num1;
    
    return Math.round(answer);
}
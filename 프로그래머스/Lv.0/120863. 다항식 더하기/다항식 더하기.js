function solution(polynomial) {
    var answer = "";
    var num = 0, num1 = 0;
    polynomial = polynomial.split(" + ");
    
    for(var i=0; i<polynomial.length; i++) {
        if(polynomial[i].includes("x")) {
            if(polynomial[i].length > 1) {
                num += Number(polynomial[i].slice(0, polynomial[i].length-1));
            }else {
                num += 1;
            }
        }else {
            num1 += Number(polynomial[i]);
        }
    }
    
    //1x이거나  x + 3일 경우
    if(num == 1) {
        if(num1 == 0){
             return "x"; 
        }else {
             return "x + " + num1; 
        }
    }
    
    // 2x + 3이거나 2x일 경우
     if(num1 != 0){
         answer = num + "x + " + num1; 
     }else { 
         answer = num + "x";  
    }
    
    // 3일 경우
     if(num == 0) {
          answer = num1.toString();  
     }
    
    return answer;
}
function solution(n) {
    var answer = 0;
    var tF = false;
    
    for(var i=1; i<= n; i++) {
        answer += 1;
        
        if(answer % 3 ==0 || answer.toString().includes("3")){
           tF = true;   
        }
        
        while(tF){
            if(answer % 3 ==0) answer += 1;  
            if(answer.toString().includes("3")) answer += 1; 
            if(answer % 3 !=0 && !answer.toString().includes("3")) tF = false;
        }
    }
    
    return answer;
}
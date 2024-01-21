function solution(code) {
    var answer = '';
    var mode = 0;
    
    for(var i=0; i<code.length; i++){
        if(code[i] == "1") {
            
            mode = (mode ==0) ? 1: 0;
            
        }else {
            if(mode == 0) {
                if(i%2==0) answer += code[i];
            }else {
                if(i%2==1) answer += code[i];
            }
        }
    }
    
    if(answer == "") answer = "EMPTY";
    
    return answer;
}
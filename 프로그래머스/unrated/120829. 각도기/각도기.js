function solution(angle) {
    var answer = 0;
    
    if(angle < 90) { //예각일 때
        answer = 1;
        
    }else if(angle == 90) { //직각일 때
        answer = 2;
        
    }else if(angle < 180) { //둔각일 때
        answer = 3;
        
    }else if(angle == 180) { //평각일 때
        answer = 4;
    }
    
    return answer;
}
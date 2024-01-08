function solution(s) {
    var answer = true;
    
    var reg = /[a-zA-Z]/g;
    var a = s.split(reg);
    
    if(a.includes("")|| a.length ==2) {
        answer = false;
    }else {
        if(s.length == 4) {
            answer = true;
        } else if(s.length == 6) {
            answer = true;
        }else {
            answer = false;
        }
    }


    return answer;
}
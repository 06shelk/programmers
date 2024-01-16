function solution(s) {
    var answer = true;
   
    var reg = /[a-zA-Z]/g;
    var a = s.split(reg);
    
    if(a.includes("")|| a.length !==1) {
        answer = false;
    }else {
        if(s.length == 4 ||s.length == 6) {
            answer = true;
        }else {
            answer = false;
        }
    }


    return answer;
}
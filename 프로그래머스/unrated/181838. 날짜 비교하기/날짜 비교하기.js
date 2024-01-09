function solution(date1, date2) {
    var answer = 0;
    
    //년도 비교
    if (date1[0] < date2[0]) {
        return 1;
    }else if(date1[0] > date2[0]) {
        return 0;
    }else {
        
        //월 비교
        if (date1[1] < date2[1]) {
           return 1;
        }else if(date1[1] > date2[1]){
            return 0;
       }else {
           //일 비교
            answer = (date1[2] < date2[2])? 1:0;
       }
    }
    
    return answer;
}
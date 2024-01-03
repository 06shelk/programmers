function solution(emergency) {
    var answer = [];
    
    var a = [...emergency];  // emergnecy 배열 복사본
    var a = a.sort((a,b)=> b-a); // 내림차순 정렬
    var map = new Map(); 
    
    for(var i=0; i<emergency.length; i++) {
        map.set(a[i], i+1); //max a값과 인덱스+1값을 넣음
    }
    
    for(var i=0; i<emergency.length; i++) {
        answer[i] = map.get(emergency[i]); //꺼냄 emergency순서대로 max에서 꺼냄
    }
    
    return answer;
}
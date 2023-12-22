function solution(order) {
    var answer = 0;
    
    for(var i =0; i<order.length; i++) {
       if(order[i].includes("cafelatte")) {
           answer += 5000;
       }else if(order[i].includes("cafelatte")) {
           answer += 4500;
       }else {
           answer += 4500;
       }
    }
    
    return answer;
}
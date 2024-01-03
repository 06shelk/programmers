function solution(myStr) {
    var answer = [];
    
    var reg = /[a-c]/g;
    var a = myStr.split(reg);
    
    for(ele of a) if(ele !== "") answer.push(ele);
    if(answer.length == 0) answer.push("EMPTY");
    
    return answer;
}
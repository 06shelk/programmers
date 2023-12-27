function solution(strArr) {
    var answer = [];
    
    for(ele of strArr) if(!ele.includes("ad")) answer.push(ele);
    
    return answer;
}
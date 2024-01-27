function solution(d, budget) {
    var answer = 0;
    d= d.sort((a,b) => a-b);
    var num = 0;
    
    for(var i=0; i< d.length; i++) {
        num += d[i];
        if(num <= budget) answer = i + 1;
    }
    
    return answer;
}
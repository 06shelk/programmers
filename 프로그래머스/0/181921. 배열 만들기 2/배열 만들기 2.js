function solution(l, r) {
    var answer = [];
    var reg =  /[1-4]|[6-9]/;
    for(var i= l; i<=r; i++) {
        if(!reg.test(i.toString())) answer.push(i);   
    }
    
    if(answer.length == 0) answer.push(-1);
    
    return answer;
}
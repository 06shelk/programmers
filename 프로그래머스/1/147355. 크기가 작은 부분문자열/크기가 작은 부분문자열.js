function solution(t, p) {
    var answer = [];
    
    for(var i=0; i<t.length; i++) {
        if( Number(p) >= Number(t.slice(i, i+p.length)) && t.slice(i, i+p.length).length == p.length) {
            answer.push(Number(t.slice(i, i+p.length)));
        }
    }
    
    return answer.length;
}
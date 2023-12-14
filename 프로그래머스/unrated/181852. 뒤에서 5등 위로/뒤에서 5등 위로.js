function solution(num_list) {
    var answer = [];
    
    num_list.sort((a,b) => a -b);
    
    for(var i =0; i<num_list.length; i++) {
        if(i >= 5) answer.push(num_list[i]); 
    }
    
    return answer;
}
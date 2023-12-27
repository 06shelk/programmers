function solution(my_string) {
    var answer = [];
    
    for(element of my_string) if(Number(element)||element==0)answer.push(Number(element));
     
     answer.sort((a,b) => a-b);
    
    return answer;
}
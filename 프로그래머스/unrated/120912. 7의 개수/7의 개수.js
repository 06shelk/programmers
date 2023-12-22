function solution(array) {
    var answer = 0;
    
    var temp = array.join('');
    
    for(element of temp) if(element == "7") answer++;
    
    return answer;
}
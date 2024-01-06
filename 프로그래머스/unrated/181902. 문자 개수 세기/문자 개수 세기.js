function solution(my_string) {
    var answer = Array(52).fill(0);
    
    for(var i=0; i<my_string.length; i++) {
        if(my_string[i].charCodeAt()>=65 && my_string[i].charCodeAt()<=90) {
            answer[my_string[i].charCodeAt()-65] += 1;
        }
        
        if(my_string[i].charCodeAt()>=97 && my_string[i].charCodeAt()<=122) {
            answer[my_string[i].charCodeAt()-97+26] += 1;
        } 
    }
    
    return answer;
}
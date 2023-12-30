function solution(my_string) {
    var answer = '';
    
    for(var i = my_string.length -1; i>=0; i--) {
        if(my_string.slice(0,i).split('').includes(my_string[i]) == false ) {
            answer+= my_string[i];
        } 
    }
    
    answer = answer.split('').reverse().join('');
    
    
    return answer;
}
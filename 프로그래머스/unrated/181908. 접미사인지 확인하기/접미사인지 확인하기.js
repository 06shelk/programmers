function solution(my_string, is_suffix) {
    var answer = 0;
    
    var str = "";
    
    for (var i =0; i<my_string.length; i++) {
        str = my_string.substring(i);
        
        if(str === is_suffix) {
            answer = 1;
            break;
        }
    }
    
    return answer;
}
function solution(my_string, indices) {
    var answer = [];
    
    my_string = my_string.split('');
    
    for(var i=0; i< indices.length; i++) {
        delete my_string[indices[i]];
    }
    
    for(var i=0; i< my_string.length; i++) {     
        if(my_string[i] != null) answer += my_string[i];
    }
    
    return answer;
}
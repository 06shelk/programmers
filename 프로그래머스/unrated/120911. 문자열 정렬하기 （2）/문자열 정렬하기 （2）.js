function solution(my_string) {
    var answer = '';
    
    my_string = (my_string.toLowerCase()).split('');
    
    return (my_string.sort()).join('');
}
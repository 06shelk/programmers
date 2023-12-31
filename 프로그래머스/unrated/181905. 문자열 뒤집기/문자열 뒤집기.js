function solution(my_string, s, e) {
    var answer = '';
    
    var se  = my_string.slice(s,e+1); // 21Sremm
    var sePre = my_string.slice(0,s); // Progra
    var sefo = my_string.slice(e+1, my_string.length); // 3
    se = se.split('').reverse().join(''); // mmerS12
    
    return sePre + se + sefo;
}
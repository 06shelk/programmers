function solution(my_string) {
    var answer = 0;
    
    var reg = /[a-zA-Z]/g;
    var a = my_string.split(reg);
    
    for(var i=0; i<a.length; i++) {
         if(a[i] !== "") {
             answer += Number(a[i]);
         }
    }
    
    return answer;
}
function solution(my_string, m, c) {
    var answer = '';
    var arr = [];

     for (let i = 0; i<my_string.length; i=i+m){
        arr.push(my_string.slice(i, i+m));
    }
    
     for(var i=0; i<arr.length; i++) {
         answer += arr[i].slice(c-1, c);
     }
    
    return answer;
}
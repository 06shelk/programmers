function solution(myString, pat) {
    var answer = 0;
    var a = "";
    
   for(var i =0; i<myString.length; i++) {
       if(myString[i] === 'A') {
            a += myString[i].replace('A', 'B');
       } else {
            a += myString[i].replace('B', 'A');
       }
   }
 
    answer = (a.includes(pat) == true) ? 1: 0;
    
    return answer;
}
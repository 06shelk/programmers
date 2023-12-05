function solution(array) {
    var answer = 0;
    
    array.sort((a,b)=>a-b);
    
//     var aL = Math.floor(array.length/2);
//     answer = array[aL];
    
       answer = array[parseInt(array.length/2)];  
    
    
    return answer;
}
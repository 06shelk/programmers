function solution(arr) {
    var answer = 0;
    var array = [...arr];
    
    while(true) { 
        const next = [];
        
        for(var i=0; i<array.length; i++) {
             const item = array[i];
              if (item >= 50 && item % 2 === 0) {
                  next.push(item / 2);
              }else if (item < 50 && item % 2 === 1) {
                  next.push(item * 2 + 1);
              }else {
                   next.push(item);
              }
        }
        const isEqual = array.every((item, idx) => item === next[idx]); 

        if(isEqual) break;
        array =  next;
        answer++;
    } 
    
    return answer;
}
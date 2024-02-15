function solution(k, tangerine) {
    var answer = [];
    
    // k = 2;
    // tangerine = [1000, 2000, 2000, 1000]; 
    
    if(tangerine.length == 1) return 1;
    
//     for i in tangerine:
// li[i-1] += 1
    
    var li = new Array(Math.max(...tangerine) +1).fill(0);
    
    for(var ele of tangerine) {
        li[ele] += 1;
    }
    
    
    li.sort((a,b) => b-a);
    
    
    for(var i=0; i< li.length; i++) { 
        k = k - li[i];
        
        if (k <= 0) {
            answer = i+1;
            break
            return answer;
        }
        // answer.push(k);
    }
    
    // //var temp = new Array(tangerine.length+1).fill(0); 
    // const set = new Set(tangerine);
   
    return answer;
}
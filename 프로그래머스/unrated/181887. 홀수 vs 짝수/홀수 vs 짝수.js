function solution(num_list) {
    var answer = 0;
    
    var even = 0, odd =0; 
    
     for(var i=0; i<num_list.length; i++) {
         if(i%2==0) even += num_list[i];
         if(i%2==1) odd += num_list[i];
     }
    
    answer = (even>odd) ? even: odd;
    
    return answer;
}
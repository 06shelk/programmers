function solution(num_list) {
    var answer = 0;
    
    var a = 0, b =0; 
    
     for(var i=0; i<num_list.length; i++) {
         if(i%2==0) a += num_list[i];
         if(i%2==1) b += num_list[i];
     }
    
    answer = (a>b) ? a: b;
    
    return answer;
}
function solution(num_list) {
    var answer = 0;
    
    var num =0;
    var cnt = new Array(num_list.length).fill(0);
    
    for(var i=0; i<num_list.length; i++) {
        num = num_list[i];
        
        while(num !== 1) {
            if(num%2==0) {
                num = num/2;
            }else {
                num = (num -1)/2;
            } 
            cnt[i]++;
        }
    }
    
    
    for(ele of cnt) answer += ele;
    
    
    return answer;
}
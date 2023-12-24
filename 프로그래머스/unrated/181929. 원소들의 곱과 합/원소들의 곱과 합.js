function solution(num_list) {
    var answer = 0;
    var num_mult =1;
    var num_square = 0;  
        
    for(var i=0; i<num_list.length; i++){
        //모든 원소들의 곱
        num_mult *= num_list[i];
            
        //모든 원소들의 합
        num_square += num_list[i];
    }    
     
    num_square = (num_square*num_square);    
    answer = num_mult>num_square? 0:1;
    
    return answer;
}
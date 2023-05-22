class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        
        int num_mult =1;
        int num_square = 0;  
        
        for(int i=0; i<num_list.length; i++){
            //모든 원소들의 곱
            num_mult *= num_list[i];
            
            //모든 원소들의 합
            num_square += num_list[i];
        }
        
        num_square = (num_square*num_square);
        
        answer = num_mult>num_square? 0:1;
        
        return answer;
    }
}
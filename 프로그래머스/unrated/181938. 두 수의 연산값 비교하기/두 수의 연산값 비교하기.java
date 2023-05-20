class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        String logicalSum = Integer.toString(a) + Integer.toString(b);        
        int number = Integer.parseInt(logicalSum);
        
        int Multi = a * b* 2; 
        
        if(number>Multi) {
            answer = number;
        }else{
            answer = Multi;
            
        }
        
        return answer;
    }
}
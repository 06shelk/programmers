class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        String non = Integer.toString(a) + Integer.toString(b);
        
        int number = Integer.parseInt(non);
        int did = a * b* 2;
        
        if(number>did) {
            answer = number;
        }else{
            answer = did;
            
        }
        
        return answer;
    }
}
class Solution {
    public int solution(int a, int b, boolean flag) {
        int answer = 0;
        boolean c = true;
        
        
        if(flag == c) {
            answer =  a + b;
        }else {
            answer =  a - b;
        }
        
        
        return answer;
    }
}
class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        
        eq = n == m ? "=": "!";  
        
        if(ineq.equals(">"))
            answer = n>m ? 1: 0;
        
        
        if(ineq.equals("<"))
            answer = n<m ? 1: 0;
        
        
        return answer;
    }
}
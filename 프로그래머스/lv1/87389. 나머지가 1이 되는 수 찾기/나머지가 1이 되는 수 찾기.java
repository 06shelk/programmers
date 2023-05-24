class Solution {
    public int solution(int n) {
        for (int x = 1; x <= n; x++) {
            if (n % x == 1) {
                return x;
            }
        }
        
        return -1; // 예외 처리: 답이 항상 존재하므로 이 부분은 실행되지 않음
    }
}
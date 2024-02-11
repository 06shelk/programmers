function solution(chicken) {
    var answer = 0;
    
    while(10 <= chicken) {
        // 서비스 치킨 값
        var newChickenService = Math.floor(chicken/10);
        // 주문한 서비스 치킨 Count
        answer += newChickenService;
        // 쿠폰으로 산 치킨 + 서비스 치킨
        chicken = chicken % 10 + newChickenService;   
    }
    
    return answer;
}
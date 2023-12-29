function solution(order) {
    var answer = 0;
    
    order = (order.toString()).split('');
    
    for(num of order) if(num ==3||num==6||num==9) answer++;
    
    
    return answer;
}
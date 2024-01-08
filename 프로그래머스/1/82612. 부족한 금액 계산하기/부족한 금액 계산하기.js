function solution(price, money, count) {
    var answer = -1;

    
    for(var i=1; i<=count; i++) {
        money -= price*i; 
    }
    
    if(money >=0) money = 0;
    
    return Math.abs(money);
}
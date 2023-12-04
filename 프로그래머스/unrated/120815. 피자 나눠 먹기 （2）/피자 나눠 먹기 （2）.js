function solution(n) {
    var answer = 0;
    
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
  
    return answer = pizza;
}

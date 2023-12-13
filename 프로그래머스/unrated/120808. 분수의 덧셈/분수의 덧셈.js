function solution(numer1, denom1, numer2, denom2) {
    
    var samede = denom1 * denom2; // 공통 분모
    var num1 = numer1 * denom2; // 자1
    var num2 = numer2 * denom1; // 자2
    
    var numplus = num1 + num2; // 분자
    
    var min = (samede >= numplus) ? numplus: samede;
    
    var best = 1; //최공
    
    for(var i = 2; i<=min; i++) {
        if(samede % i ==0 && numplus % i==0) best = i;
    }
    
    var numer = numplus / best; //최공에 의해 나눠진 분자값
    var denom = samede / best; //최공에 의해 나눠진 분자값
    
    return [numer, denom];
}
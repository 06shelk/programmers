function solution(n) {
    var num = [0,1];
    
    for(var i= 2; i<=n; i++) {
        num.push((num[i-1] + num[i-2]) % 1234567); 
    }
    
    return num[n];
}
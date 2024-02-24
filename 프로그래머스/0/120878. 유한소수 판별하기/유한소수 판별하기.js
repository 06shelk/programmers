function solution(a, b) {
    var answer = 0;
    var gcd = 0;
    var array = [];
    
    if(a == b) return 1;
    
    for(var i=2; i<= Math.min(a,b); i++) {
        if(a%i==0 && b%i==0) gcd = i;
    }
    
    if(gcd != 0 ) b /= gcd;
    
    for(let i = 2; i <= b; i++) {
        while (b % i === 0) {
            b = b / i;
            array.push(i);
        }
    }
    
    for(var ele of array) {
        if(ele != 2 &&  ele != 5) {
            return 2;
        } 
    }
    
    return 1;
}
function solution(n, m) {
    var gcd  = 1;
    var lcm  = 1;
    
    //최대공약수
    for(var i=2; i<= Math.min(n,m); i++) {
        if(n%i==0 && m%i==0) gcd = i;
    }
    
    //최소공배수
    while(true){
      if((lcm % n == 0) && (lcm % m == 0)){
        break;
      }
      lcm++;
    }
    
    return [gcd, lcm];
}
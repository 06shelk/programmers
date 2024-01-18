function solution(s) {

    var alp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(var i=0; i<alp.length; i++) {
       s=  s.replaceAll(alp[i], i); 
    }
    
    
    return Number(s);
}
function solution(numbers) {
    var answer = "";
    
    var alp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(var i=0; i<alp.length; i++) {
       numbers=  numbers.replaceAll(alp[i], i); 
    }
    
    return Number(numbers);
}
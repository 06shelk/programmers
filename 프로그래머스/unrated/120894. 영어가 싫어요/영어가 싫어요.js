function solution(numbers) {
    var answer = "";
    
    var alp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    for(var i=0; i<alp.length; i++) {
       numbers=  numbers.replaceAll(alp[i], num[i]); 
    }
    
    return Number(numbers);
}
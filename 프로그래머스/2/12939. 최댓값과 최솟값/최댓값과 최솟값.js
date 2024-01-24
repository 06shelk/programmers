function solution(s) {
    
    s= s.split(" ");
    
    var min = Math.min(...s);
    var max = Math.max(...s);
  
    return min + " " + max;
}
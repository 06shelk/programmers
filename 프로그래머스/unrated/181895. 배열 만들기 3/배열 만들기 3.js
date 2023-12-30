function solution(arr, intervals) {
    var answer = [];
    
    var num1 = arr.slice(intervals[0][0], intervals[0][1]+1) 
    var num2 = arr.slice(intervals[1][0], intervals[1][1]+1);
    
    return num1.concat(num2);
}
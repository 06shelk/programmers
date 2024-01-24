function solution(nums) {
    var answer = 0;
    
    var nL = nums.length/2;
    var arr = [...new Set(nums)];
    
    if(arr.length  < nL) answer =  arr.length;
    else answer = nL;
    
    
    return answer;
}
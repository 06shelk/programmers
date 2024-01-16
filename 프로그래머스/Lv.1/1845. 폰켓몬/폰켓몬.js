function solution(nums) {
    var answer = 0;
    
    var nL = nums.length/2;
    const set = new Set(nums);
    const arr = Array.from(set);
    
    if(arr.length  < nL) answer =  arr.length;
    else answer = nL;
    
    
    return answer;
}
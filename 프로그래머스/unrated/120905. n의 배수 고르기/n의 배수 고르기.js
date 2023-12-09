function solution(n, numlist) {
    var answer = [];
    
    let filtered = numlist.filter((element) => element % n ==0);
    
    return filtered;
}
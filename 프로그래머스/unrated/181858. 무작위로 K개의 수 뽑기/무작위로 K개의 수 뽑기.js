function solution(arr, k) {
    var answer = 0;
    const array = [...new Set(arr)];
    
     while (array.length < k) {
        array.push(-1);
    }
    
    return array.slice(0, k);
}
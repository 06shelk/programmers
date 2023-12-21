function solution(arr, k) {
    var answer = [];
    
    for(ele of arr) answer.push((k%2==1) ? ele * k : ele + k);
    
    return answer;
}
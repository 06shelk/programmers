function solution(num_list, n) {
    var answer = [];
    
    let i = 0;
    do {
      answer.push(num_list[i]);
      i = i+n;
    }
    while (i<num_list.length);
    
    return answer;
}
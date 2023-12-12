function solution(num_list) {
    var answer = num_list;
    var len = num_list.length -1;
    
    var com = num_list[len] > num_list[len-1] ? num_list[len] - num_list[len - 1] : num_list[len] * 2;
    
    answer.push(com);
    
    return answer;
}
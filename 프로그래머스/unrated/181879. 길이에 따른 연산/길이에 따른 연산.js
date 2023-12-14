function solution(num_list) {
    var answer;

    if (num_list.length >= 11) {
        answer = 0;
        for (var i = 0; i < num_list.length; i++) {
            answer += num_list[i];
        }
    } else {
        answer = 1;
        for (var i = 0; i < num_list.length; i++) {
            answer *= num_list[i];
        }
    }

    return answer;
}

function solution(strings, n) {
    var answer = strings.sort();

    answer.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());

    return answer;
}
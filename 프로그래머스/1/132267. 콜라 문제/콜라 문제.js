function solution(a, b, n) {
    var answer = 0;
    var emptyBottles = n; 

    while (emptyBottles >= a) {
        var colaReceived = Math.floor(emptyBottles / a) *b;
        answer += colaReceived; 
        emptyBottles = colaReceived + (emptyBottles % a); 
    }

    return answer;
}

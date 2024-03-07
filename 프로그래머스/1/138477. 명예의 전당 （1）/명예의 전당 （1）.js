function solution(k, score) {
    var answer = [];
    // 임시 배열
    var array = [];
    
    for(var i=0; i<score.length; i++) {
        // 배열에 값을 넣기
        array.push(score[i]);
    
        // 오름차순 정렬
        array.sort((a,b) => a-b);

        // 개수가 3이면
        if(array.length > k) {
            // 값을 k개로 자르기
            var firstElement = array.shift();
        }

        // 가장 첫번째 값
        var a = array[0];

        answer.push(a);
        // .. 이를 score.length만큼 반복
    }
    
    return answer;
}
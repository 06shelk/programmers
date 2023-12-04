function solution(num_list) {
    var answer = [];
    
    addCount = 0;
    evenCount = 0;
    
    for(var i =0; i < num_list.length; i++) { // 배열 길이만큼 돌리기 
        if(num_list[i] % 2 == 0) { // 배열 안에 숫자가 짝수라면
            evenCount++;
        } else { // 홀수라면
            addCount++;
        }
    }
    
    return  answer = [evenCount, addCount]; //짝수, 홀수로 배열에 값 넣기
}
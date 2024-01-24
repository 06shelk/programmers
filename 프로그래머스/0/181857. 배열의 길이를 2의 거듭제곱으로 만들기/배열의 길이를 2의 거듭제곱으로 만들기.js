function solution(arr) {
    var answer = [...arr];
    var arr =[];
    var num = 0;
    
    // arr에 [2,4,8,16,32,64,128,256,512,1024] 넣음
    for(var i=0; i<=10; i++) {
        arr.push(Math.pow(2, i));
    }
    
    // 가장 가까우면서 큰 인덱스 구하기
    for(var i=0; i<=10; i++) {
       if(arr[i] >= answer.length){
           num = i;
           break;
       }
    }
    
    // 필요한 만큼 0추가
    for(var i= answer.length; i< arr[num]; i++) {
        answer.push(0);
    }
    
    return answer;
}
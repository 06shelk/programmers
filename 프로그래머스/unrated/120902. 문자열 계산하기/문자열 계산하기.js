function solution(my_string) {
    var answer = 0;

    my_string = my_string.split(" ");
    
    for(var i=0; i<my_string.length; i++) {
        switch(my_string[i]) {
            case "+": 
                answer += Number(my_string[i+1]); 
                break;
            case "-": 
                answer -= Number(my_string[i+1]); 
                break;
            default:  
                break;
        }
    }
    
    // 첫 번째 숫자 추가
    answer += Number(my_string[0]);
    // 입력값 〉  = "3 + 4 - 2";
    // 기댓값 〉 5
    return answer;
}

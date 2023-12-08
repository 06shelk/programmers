function solution(my_string) {
    var temp = "";
    
    var answer = 0;
    
    // 문자열이 0부터 9까지의 숫자로만 이루어져 있는지 검사
    let check = /^[0-9]+$/; 
    
    // my_string만큼
    for(var i =0; i<my_string.length; i++){
        
        // 숫자가 있는지 확인
        if(check.test(my_string[i])){
            temp +=  my_string[i];
        }
    }
    
    // 숫자로 변환해서 더함
    for(var i =0; i<temp.length; i++){
        answer += Number(temp[i]);
    }
    
    return answer;
}

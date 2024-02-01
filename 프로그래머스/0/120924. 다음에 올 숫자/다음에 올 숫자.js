function solution(common) {
    var answer = 0;
    
    if( common[1] - common[0] == common[2] - common[1] ) { // 등차수열 식 a + (n-1)d
        answer = common[0] + (common.length ) * (common[1] - common[0]); //등차
    }else {
        answer = common[0] * Math.pow((common[1] / common[0]), common.length); //등비
    }
    
    return answer;
} 
function solution(arr1, arr2) {
    var answer = 0;
    
    const result1 = arr1.reduce((prev, cur) => {
        return prev + cur;
    }, 0)
    
    const result2 = arr2.reduce((prev, cur) => {
        return prev + cur;
    }, 0)
    
    if(arr1.length > arr2.length) {
        answer = 1;
    }else if(arr1.length < arr2.length) {
        answer = -1;
    }else {
        
        if(result1 === result2) {
            answer = 0;
        } else if(result1 > result2) {
            answer = 1;
        } else {
             answer = -1;
        }  
    }
    
    return answer;
}
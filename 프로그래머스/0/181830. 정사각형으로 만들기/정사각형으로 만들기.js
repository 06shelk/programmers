function solution(arr) {
    var answer = [];
    const numRows = arr.length;
    const numCols = arr[0].length;
    var num =0;
    
    if(numCols > numRows) {
        num = numCols - numRows;
        
        var array = [...arr];
        
        for (let i=0; i< num; i++) {
            array.push(Array(numCols).fill(0));
        }
        
        answer = array;
        
    }else {
        num = numRows - numCols;
        
        for(var i=0; i< numRows; i++) {
            let subArray = arr[i];
            for (let j = 0; j < num; j++) {
                subArray.push(0);
            }
            answer.push(subArray);
        }
    }    

    return answer;
}
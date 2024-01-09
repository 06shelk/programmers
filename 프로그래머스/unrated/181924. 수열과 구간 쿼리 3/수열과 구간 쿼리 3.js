function solution(arr, queries) {
    var answer = [...arr];
    
    // [arr[0], arr[3]] =  [arr[3], arr[0]]
   

     for(var i = 0; i < queries.length; i++) {
        var temp = answer[queries[i][0]];
        answer[queries[i][0]] = answer[queries[i][1]];
        answer[queries[i][1]] = temp;
    }
    
    return answer;
}
function solution(strArr) {
    var answer = 0;
    
//     var arr1 =[];
//     var arr2 = [];
//     var arr3 = [];
    
//     for(var i =0; i<strArr.length; i++) {
//         if(strArr[i].length == 1) {
//             arr1.push(strArr[i]); 
//         }else if(strArr[i].length == 2) {
//             arr2.push(strArr[i]); 
//         } else {
//             arr3.push(strArr[i]); 
//         }
//     }
    
//     answer = Math.max(arr1.length, arr2.length, arr3.length);
    
    var temp = new Array(strArr.length + 1).fill(0);
    
    for (var i = 0; i < strArr.length; i++) {
        temp[strArr[i].length]++;
    }
    
    var max = Math.max(...temp);
    
    return max;
}
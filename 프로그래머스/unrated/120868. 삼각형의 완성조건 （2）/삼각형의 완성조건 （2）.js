function solution(sides) {
   var answer = 0;
   
    sides.sort((a,b)=>a-b); //정렬하기
    
    answer = 2 *sides[0] - 1;
    
//     var i = sides[1];   //큰 값
    
//     var j = sides[0] +1; // 작은 수에서 +1
//     var cnt = 0;
    
//     var maxLen = sides[0] + sides[1]; // 두 수를 더함
    
//     //가장 큰 변이 sides 없을 때
//     while (true) {
//         if(i >= sides[1] && maxLen > i){ // 가장 긴 변보다는 길거나 같아야하며 다른 두 변의 길이의 합보다 작음
//             // answer = i;
//             cnt++;
//             answer++;
//             break;
//         }
//         i++;

//     }
    
//     //가장 큰 변이 sides 있을 때
//     while (true) {
//         if(j > sides[0] && sides[1] >= j){ // 가장 작은 값보다는 크고 가장 큰 값과는 작거나 같음
//             // answer = j;

//                 // answer++;
//             cnt++;
//             break;
//         }
        
//         j++;
        
//     }
    
    
    
    
    return answer;
}
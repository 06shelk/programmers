function solution(sides) {
    var answer = 0;
    
//     max = Math.max(...sides);
    
//     maxNot = 0;
    
//     for(var i=0; i<sides.length; i++) {
//         if(sides[i] != max) {
//             maxNot += sides[i];
//         }
//     }
    
//     answer = maxNot > max ? 1 : 2;
    
    sides.sort((a,b) => a-b);
    
    answer = sides[2] >= sides[0] +  sides[1] ? 2: 1;
    
    return answer;
}
function solution(brown, yellow) {
    var array = [];
    
    var brownAndYellow = brown + yellow;
    
    for(var i=1; i<=brownAndYellow; i++) {
        if(brownAndYellow % i==0) array.push(i);
    }
    
    for (let i = 0; i < array.length / 2; i++) {
        if(yellow == (array[i] -2)* (array[array.length - 1 - i]-2)){
            return [array[array.length - 1 - i], array[i]];
        }       
    }
}
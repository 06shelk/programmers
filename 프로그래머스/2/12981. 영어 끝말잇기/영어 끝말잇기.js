function solution(n, words) {
    var num = 0 , num1 =0;
    var lastWord = [];
    
    for(let i=0; i< words.length; i++) {   
        // 전 단어의 마지막 문자와 현재 단어의 첫번째 문자 구하고 다르면 멈추기
        var aa = words[i].split("");
        lastWord.push(aa[aa.length -1]);
        var firstWord = words[i].split("");
        if(i != 0 && firstWord[0] != lastWord[i-1]) return [ i % n + 1, Math.floor((i) / n) + 1];
        
        // 전에 나왔던 단어인지 확인
        for(var j=0; j<i; j++) {
            if(words[i] == words[j]) return [ i % n + 1, Math.floor((i) / n) + 1];
        }    
    }
    
    return [0,0];
}
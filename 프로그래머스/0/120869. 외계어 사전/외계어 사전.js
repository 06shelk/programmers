function solution(spell, dic) {
    var result = 2;
    
    for(var i=0; i<dic.length; i++) {
        if(spell.every(str => dic[i].includes(str))) return 1;
    }
    
    return result;
}

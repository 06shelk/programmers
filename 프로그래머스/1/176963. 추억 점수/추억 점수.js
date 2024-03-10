function solution(name, yearning, photo) {
    var answer = [];
    
    var person = {};
    
    for(var i=0; i<name.length; i++) {
        person[name[i]] = yearning[i];
    }
    
    for(var i=0; i<photo.length; i++) {
        var temp = 0;
        for(var j=0; j<photo[i].length; j++) {
            var str = photo[i][j];
            if (person.hasOwnProperty(str)) {
                temp += person[str];
            }    
        }
        answer.push(temp);
    }
    
    return answer;
}
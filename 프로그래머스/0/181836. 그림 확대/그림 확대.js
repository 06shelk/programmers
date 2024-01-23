function solution(picture, k) {
    var answer = [], strRepeat = [];
    var temp = "";
    
    for(var j=0; j<picture.length; j++) {
        temp = picture[j].split("").join("");
         for(var z=0; z< k; z++) {
             for(var i=0; i<temp.length; i++) {
                strRepeat.push(temp[i].repeat(k));
             }
             strRepeat.push(1);
         }
    } 
    
    strRepeat = strRepeat.join("").split("1");
    strRepeat.pop();
    
    return strRepeat;
}
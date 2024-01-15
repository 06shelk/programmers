function solution(id_pw, db) {
    var answer = '';
    
//     id_pw = ["abc04", "345"];
//     db = [["abc04", "335"], ["abc03", "345"]];
//     // 기댓값 〉 "wrong pw"
    
    
    for(var i=0; i< db.length; i++) {
        if(id_pw[0] == db[i][0] && id_pw[1] == db[i][1]) {
            answer = "login";
        }else if(id_pw[0] == db[i][0] && id_pw[1] != db[i][1]){
             return "wrong pw";
        }else {
            answer = "fail";
        }
    }
    
     
    
    return answer;
}
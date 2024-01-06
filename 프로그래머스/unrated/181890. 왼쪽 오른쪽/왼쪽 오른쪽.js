function solution(str_list) {
    var answer = [];
    
    if( !str_list.includes("l") && !str_list.includes("r") ) return str_list = [];
    
    for(var i=0; i<str_list.length; i++) {
        if(str_list[i] == "l") {
            str_list = str_list.slice(0, i);
            break;
        }else if(str_list[i] == "r") {
            str_list = str_list.slice(i+1, str_list.length+1);
            break;
        }
    }
    
    
    
    return str_list;
}
function solution(num_list) {
    var answer = 0;
    
    var add = "", even ="";
    
    for(var i=0; i<num_list.length; i++) {
      if(num_list[i]%2==0) {
          even += num_list[i].toString();
      }else {
          add += num_list[i].toString();
      }
    }
    
    answer = +even + +add;
    
    return answer;
}
function solution(n, slicer, num_list) {
    var answer = [];
    
    if(n==1) {
        answer = num_list.slice(0, slicer[1]+1);
    }else if(n == 2){
        answer = num_list.slice(slicer[0], num_list.length+1);
    }else if(n == 3){
        answer = num_list.slice(slicer[0], slicer[1]+1);
    }else {
        
        num_list = num_list.slice(slicer[0], slicer[1]+1);
        for(var i=0; i<num_list.length; i+=2) {
            answer.push(num_list[i]);
        }
    }
    
    return answer;
}
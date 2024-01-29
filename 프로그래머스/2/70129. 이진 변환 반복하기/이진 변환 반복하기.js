function solution(s) {
    var num = s;
    var num0 = 0;
    var cnt = 0;
    
    while(num != "1"){
        cnt++;
        var array = [];
        for(var ele of num) {
            if("1" == ele) array.push(ele);
            else num0++;
        }
        num = (array.length).toString(2);
    }
    
    return [cnt, num0];
}
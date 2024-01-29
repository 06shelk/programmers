function solution(n) {
    var answer = 0, cnt = 0;
    var array = n.toString(2).split("");
    for(var ele of array) if(ele == "1") cnt++;
    
    var i = n+1;
    while(i < 1000000)  { 
        var cnti = 0;   
        var arr = i.toString(2).split("");
        for(var ele of arr) if(ele == "1") cnti++;
        
        if(cnti == cnt) {
            return i; 
        }
        i++;
    }
}
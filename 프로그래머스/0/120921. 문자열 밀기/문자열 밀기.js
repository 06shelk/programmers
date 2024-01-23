function solution(A, B) {
    var answer = 0;

    if(A == B) return 0;
    
    for(var i=1; i<A.length; i++) {
        var str1 = A.slice(0, A.length - i);
        var str2 = A.slice(-i);
        var temp = str2 + str1;
        
        if(temp == B) return i;
    }
    
    return -1;
}
function solution(n, arr1, arr2) {
    var answer = [];
    var arr1_2 = [];
    var arr2_2 = [];
    
    for(var i=0; i< n; i++) {
        // 이진수 변환, 5글자 만들기
        var a = arr1[i].toString(2).padStart(n, "0");
        var b = arr2[i].toString(2).padStart(n, "0");
        
        a = a.split('');
        b = b.split('');
        
        // arr1_2.push(a);
        // arr2_2.push(b);
        
        // arr1, arr2를 비교하고
        // arr1 or arr2 하나라도 1이 있다면 #
        var str = "";
        for(var j =0; j<n; j++) {
            if(a[j]==1 || b[j] ==1) {
                str += "#";
            }else {
                str += " ";
            }
        }
        answer.push(str);
    }
    
    return answer;
}
function solution(array) {
    var temp = new Array(1001).fill(0); // 배열의 원소는 0부터 1000까지이므로 길이를 1001로 설정

    for (var i = 0; i < array.length; i++) {
        temp[array[i]]++;
    }
    
    var max = Math.max(...temp);
    
    if (temp.filter(value => value === max).length > 1) {
        return -1; // 최빈값이 여러 개인 경우 -1을 바로 반환
    }
    
    return temp.indexOf(max); // 최빈값의 인덱스 반환
}

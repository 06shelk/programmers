function solution(n) {

    var num3 = n.toString(3).split('').reverse('').join('');
    var num10 = parseInt(num3, 3);
    
    return num10;
}
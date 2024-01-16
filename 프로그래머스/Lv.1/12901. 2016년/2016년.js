function solution(a, b) {
    var answer = '';
    
    let today = new Date(2016,a-1,b);   
    
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    let day = week[today.getDay()]; 
    
    return day;
}
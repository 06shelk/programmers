function solution(sizes) {
    var answer = 0;
    var w = [];
    var h = [];

    for(var i=0; i < sizes.length ; i++){
        sizes[i].sort((a,b) => b-a);
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }

    return Math.max(...w) * Math.max(...h);
    
}
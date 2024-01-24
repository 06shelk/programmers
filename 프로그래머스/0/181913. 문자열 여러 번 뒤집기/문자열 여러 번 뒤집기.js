function solution(my_string, queries) {
    let result = my_string;

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const [s, e] = query;
        const target = result.slice(s, e + 1);

        result = result.slice(0, s) + target.split('').reverse().join('') + result.slice(e + 1);
    }

    return result;
}
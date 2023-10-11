function solution(s) {
    const position = new Map();
    var answer = [];
    for(let i = 0; i < s.length; i++) {
        if (position.has(s[i])) {
            const index = i - position.get(s[i]);
            answer.push(index);
        } else {
            answer.push(-1);
        }
        position.set(s[i],i);
    }
    return answer;
}

console.log(solution("foobar"));
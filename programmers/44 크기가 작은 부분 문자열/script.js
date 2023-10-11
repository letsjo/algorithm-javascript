function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        if (Number(p) >= Number(t.slice(i, p.length + i))) answer += 1;
    }
    return answer;
}

console.log(solution("10203", "15"));
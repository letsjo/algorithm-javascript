function solution(k, m, score) {
    const boxScale = m;
    let answer = 0;
    let remained = 0;
    for (let i = k; i >= 1; i -= 1) {
        const count = score.filter(point => point === i).length;
        answer += parseInt((count + remained) / boxScale) * boxScale * i;
        remained = (count + remained) % boxScale;
    }

    return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
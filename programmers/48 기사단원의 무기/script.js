function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i += 1) {
        let count = 0;
        for (let j = 1; j * j <= i; j += 1) {
            if (i % j === 0) {
                count += 1;
                if (j * j < i) count += 1;
            }
            if (count > limit) {
                count = power;
                break;
            }
        }
        answer += count
    }
    return answer;
}

console.log(solution(5, 3, 2));
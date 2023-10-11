function solution(s) {
    let answer = 0;
    let correct = 0;
    let target = '';

    for (let i = 0; i < s.length; i += 1) {
        if (correct === 0) {
            target = s[i];
            answer += 1;
            correct = 1;
            continue;
        }

        if (target === s[i]) {
            correct += 1;
            continue;
        }
        correct -= 1;
    }

    return answer;
}

console.log(solution("aaabbaccccabba"));
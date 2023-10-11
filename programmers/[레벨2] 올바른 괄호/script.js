function solution(s) {
    let leftCount = 0;
    let rightCount = 0;
    const lastIndex = s.length - 1;
    return s.split('').every((letter, index) => {
        if (letter === '(') leftCount += 1;
        if (letter === ')') rightCount += 1;
        if (lastIndex === index && leftCount !== rightCount) return false;
        if (leftCount >= rightCount) return true;
        return false;
    });
}

console.log(solution("()()"));
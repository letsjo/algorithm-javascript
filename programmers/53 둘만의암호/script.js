function solution(s, skip, index) {
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
    const exceptSkip = alphabet.filter((v) => !skip.includes(v));
    const exceptSkipArr = [...exceptSkip, ...exceptSkip];
    return s.split('').map((v) => exceptSkipArr[exceptSkipArr.indexOf(v) + index]).join('');
}

console.log(solution("aukks", "wbqd", 5));
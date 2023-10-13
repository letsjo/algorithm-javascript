// 문자열 나누기
// https://level.goorm.io/exam/195688/%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%98%EB%88%84%EA%B8%B0/quiz/1

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  const N = Number(input[0]);
  const S = input[1];
  const sub = [];

  for (let i = 1; i < N - 1; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      sub.push([S.slice(0, i), S.slice(i, j), S.slice(j)]);
    }
  }

  const P = [...new Set(sub.flat(Infinity))];
  P.sort();
  let maxScore = 0;

  for (let i = 0; i < sub.length; i += 1) {
    const [first, second, third] = sub[i];
    let score = 0;
    score += P.indexOf(first) + 1;
    score += P.indexOf(second) + 1;
    score += P.indexOf(third) + 1;

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
}

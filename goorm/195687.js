// 이진수 정렬
// https://level.goorm.io/exam/195687/%EC%9D%B4%EC%A7%84%EC%88%98-%EC%A0%95%EB%A0%AC/quiz/1

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
  const [N, K] = input[0].split(' ').map(Number);
  const numbers = input[1]
    .split(' ')
    .map((val) => [
      Number(val),
      [...Number(val).toString(2)].filter((item) => item === '1').length,
    ]);

  numbers.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return b[1] - a[1];
  });

  return numbers[K - 1][0];
}

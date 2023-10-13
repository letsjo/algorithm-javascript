// 운동 중독 플레이어
// https://level.goorm.io/exam/195683/%EC%9A%B4%EB%8F%99-%EC%A4%91%EB%8F%85-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4/quiz/1

const solution = (input) => {
  const [W, R] = input.split(' ').map(Number);
  return Math.floor(W * (1 + R / 30));
};

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  input = line;
  rl.close();
});

rl.on('close', () => {
  console.log(solution(input));
  process.exit();
});

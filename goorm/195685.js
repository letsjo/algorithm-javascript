// 합 계산기
// https://level.goorm.io/exam/195685/%ED%95%A9-%EA%B3%84%EC%82%B0%EA%B8%B0/quiz/1

const solution = (input) => {
  const T = Number(input[0]);
  const calcs = input.slice(1);
  let sum = 0;

  for (let i = 0; i < T; i += 1) {
    const [number1, operation, number2] = calcs[i].split(' ');

    if (operation === '+') {
      sum += Number(number1) + Number(number2);
    } else if (operation === '-') {
      sum += Number(number1) - Number(number2);
    } else if (operation === '*') {
      sum += Number(number1) * Number(number2);
    } else {
      sum += Math.floor(Number(number1) / Number(number2));
    }
  }

  return sum;
};

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

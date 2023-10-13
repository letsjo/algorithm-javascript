// 완벽한 햄버거 만들기
// https://level.goorm.io/exam/195686/%EC%99%84%EB%B2%BD%ED%95%9C-%ED%96%84%EB%B2%84%EA%B1%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0/quiz/1

const solution = (input) => {
  const ingredients = input[1].split(' ').map(Number);
  let flag = true;
  let hamburger = ingredients[0];

  for (let i = 1; i < ingredients.length; i += 1) {
    hamburger += ingredients[i];
    if (flag && ingredients[i - 1] > ingredients[i]) {
      flag = false;
    }

    if (!flag && ingredients[i - 1] < ingredients[i]) {
      return 0;
    }
  }

  return hamburger;
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

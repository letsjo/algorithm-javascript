// 프로젝트 매니징
// https://level.goorm.io/exam/195684/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%A4%EB%8B%88%EC%A7%95/quiz/1

const solution = (input) => {
  const [T, M] = input[1].split(' ').map(Number);
  const tasks = input.slice(2).map(Number);

  let currHour = T;
  let currMinute = M;

  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    currMinute += task;

    currHour += Math.floor(currMinute / 60);
    currMinute %= 60;

    if (currHour >= 24) currHour %= 24;
  }
  return [currHour, currMinute].join(' ');
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

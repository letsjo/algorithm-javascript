// 1등과 2등
// https://level.goorm.io/exam/49072/1%EB%93%B1%EA%B3%BC-2%EB%93%B1/quiz/1

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];

  for await (const line of rl) {
    input.push(line);
  }

  console.log(solution(input));

  process.exit();
})();

function solution(input) {
  const str = [...input[0]];
  let flag21 = false;
  let flag12 = false;

  for (let i = 0; i < str.length - 1; i += 1) {
    if (!flag21 && str[i] === '2' && str[i + 1] === '1') {
      flag21 = true;
      i += 1;
    } else if (!flag12 && str[i] === '1' && str[i + 1] === '2') {
      flag12 = true;
      i += 1;
    }

    if (flag21 && flag12) return 'Yes';
  }

  return 'No';
}

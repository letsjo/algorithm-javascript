// 어부의 고기잡이
// https://level.goorm.io/exam/49096/%EC%96%B4%EB%B6%80%EC%9D%98-%EA%B3%A0%EA%B8%B0%EC%9E%A1%EC%9D%B4/quiz/1

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];

  for await (const line of rl) {
    input.push(line);
  }

  console.log(solution(input));
  process.exit();
})();

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const F = input[1].split(' ').map(Number);

  let count = 0;

  for (let i = 0; i < F.length; i += 1) {
    let total = 0;
    for (let j = i; j < F.length; j += 1) {
      total += F[j];
      if (total === M) {
        count += 1;
        break;
      } else if (total > M) {
        break;
      }
    }
  }

  return count;
}

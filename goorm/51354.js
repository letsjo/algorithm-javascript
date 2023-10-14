// 구름공원
// https://level.goorm.io/exam/51354/%EA%B5%AC%EB%A6%84%EA%B3%B5%EC%9B%90/quiz/1

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
  const [N, M] = input[0].split(' ').map(Number);
  const benchs = input[1].split(' ').map(Number);

  let maxBench = 0;
  let minBench = Infinity;
  let sum = 0;

  for (let i = 0; i < benchs.length; i += 1) {
    sum += benchs[i];
    minBench = Math.max(minBench, benchs[i]);
    maxBench = Math.max(maxBench, benchs[i]);
  }

  const minK = (sum + M) / N < maxBench ? maxBench : Math.ceil((sum + M) / N);
  const maxK = maxBench + M;

  return `${minK} ${maxK}`;
}

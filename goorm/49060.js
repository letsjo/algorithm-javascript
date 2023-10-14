// 개미 집합의 지름
// https://level.goorm.io/exam/49060/%EA%B0%9C%EB%AF%B8-%EC%A7%91%ED%95%A9%EC%9D%98-%EC%A7%80%EB%A6%84/quiz/1

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
  const [N, D] = input[0].split(' ').map(Number);
  const ants = input[1].split(' ').map(Number);
  ants.sort((a, b) => a - b);

  let start = 0;
  let end = 1;
  let length = 0;

  while (start < N && end < N) {
    if (ants[end] - ants[start] <= D) {
      length = Math.max(length, end - start + 1);
      end += 1;
    } else {
      start += 1;
    }
  }

  return N - length;
}

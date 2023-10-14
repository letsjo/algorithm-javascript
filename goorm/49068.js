// 두루마리 휴지 공장
// https://level.goorm.io/exam/49068/%EB%91%90%EB%A3%A8%EB%A7%88%EB%A6%AC-%ED%9C%B4%EC%A7%80-%EA%B3%B5%EC%9E%A5/quiz/1

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
  const papers = input[1].split(' ').map(Number);
  let maxPapers = 0;
  let sum = 0;

  for (let i = 0; i < papers.length; i += 1) {
    sum += papers[i];
    maxPapers = Math.max(maxPapers, papers[i]);
  }

  const leftPaper = M - (maxPapers * N - sum);

  return leftPaper > 0 ? maxPapers + Math.floor(leftPaper / N) : 'No way!';
}

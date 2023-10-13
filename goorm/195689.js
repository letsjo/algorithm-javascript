// 구름 찾기 깃발
// https://level.goorm.io/exam/195689/%EA%B5%AC%EB%A6%84-%EC%B0%BE%EA%B8%B0-%EA%B9%83%EB%B0%9C/quiz/1

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
  const board = input.slice(1).map((val) => val.split(' ').map(Number));

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let answer = 0;

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      let count = 0;
      if (board[i][j] === 1) continue;
      for (let k = 0; k < 8; k += 1) {
        const rx = i + dx[k];
        const ry = j + dy[k];

        if (0 <= rx && rx < N && 0 <= ry && ry < N && board[rx][ry] == 1) {
          count += 1;
        }
      }
      if (count === K) {
        answer += 1;
      }
    }
  }

  return answer;
}

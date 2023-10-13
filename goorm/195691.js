// 폭탄 구현하기 (2)
// https://level.goorm.io/exam/195691/%ED%8F%AD%ED%83%84-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-2/quiz/1

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
  const board = input.slice(1, N + 1).map((val) => val.split(' '));
  const damageBoard = Array.from(Array(N), () => Array(N).fill(0));
  const bombs = input.slice(N + 1).map((val) => val.split(' ').map((val) => Number(val) - 1));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < K; i += 1) {
    const [y, x] = bombs[i];
    damageBoard[y][x] += checkDamageBlock(board, x, y);

    for (let j = 0; j < 4; j += 1) {
      const rx = x + dx[j];
      const ry = y + dy[j];

      if (0 <= rx && rx < N && 0 <= ry && ry < N) {
        damageBoard[ry][rx] += checkDamageBlock(board, rx, ry);
      }
    }
  }

  return Math.max(...damageBoard.flat(Infinity));
}

function checkDamageBlock(board, x, y) {
  if (board[y][x] === '#') return 0;
  if (board[y][x] === '@') return 2;
  return 1;
}

// 중첩 점
// https://level.goorm.io/exam/195700/%EC%A4%91%EC%B2%A9-%EC%A0%90/quiz/1

function solution(input) {
  const [N, M] = input[0].map(Number);
  const board = Array.from(Array(N + 1), () =>
    Array(N + 1)
      .fill([])
      .map((_) => ({ h: 0, v: 0 })),
  );
  const DIR = {
    U: { x: -1, y: 0, l: 'h' },
    D: { x: 1, y: 0, l: 'h' },
    L: { x: 0, y: -1, l: 'v' },
    R: { x: 0, y: 1, l: 'v' },
  };

  for (let i = 1; i < input.length; i += 1) {
    const [x, y, d] = input[i];
    let positionX = +x;
    let positionY = +y;
    while (true) {
      if (positionX <= 0 || positionY <= 0 || positionX > N || positionY > N) break;
      board[positionX][positionY][DIR[d].l] += 1;
      positionX += DIR[d].x;
      positionY += DIR[d].y;
    }
  }

  let count = 0;

  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      count += board[i][j].v * board[i][j].h;
    }
  }

  return count;
}

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  input.forEach((val) => {
    list.push(val.split(' '));
  });
  console.log(solution(list));
  process.exit();
});

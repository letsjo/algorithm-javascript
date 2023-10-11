// 미세먼지 안녕!
// https://www.acmicpc.net/problem/17144

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c, t] = input[0].split(' ').map(Number);
let board = input.slice(1).map((el) => el.split(' ').map(Number));
const cleaner = [];
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

// 공기청정기 위치 찾기
for (let i = 0; i < r; i++) {
  if (board[i][0] === -1) {
    cleaner.push([i, 0]);
    cleaner.push([i + 1, 0]);
    break;
  }
}

// 미세먼지 확산
const spreadDust = () => {
  const newBoard = Array.from(Array(r), () => Array(c).fill(0));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      // 미세먼지가 있는 칸이라면
      if (board[i][j] > 0) {
        let dust = Math.floor(board[i][j] / 5);
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < r && ny >= 0 && ny < c && board[nx][ny] !== -1) {
            newBoard[nx][ny] += dust;
            count++;
          }
        }
        newBoard[i][j] += board[i][j] - dust * count;
      } else if (board[i][j] === -1) {
        newBoard[i][j] = -1;
      }
    }
  }
  return newBoard;
};

// 공기청정기 작동
const operateCleaner = (cleaner) => {
  let [topCleanerX, topCleanerY] = cleaner[0];
  const queue = [[topCleanerX, topCleanerY + 1, board[topCleanerX][topCleanerY + 1]]];
  board[topCleanerX][topCleanerY + 1] = 0;
  let prev = 0;
  while (queue.length > 0) {
    const [x, y, dust] = queue.shift();
    if (x === topCleanerX && y === topCleanerY) {
      board[x][y] = -1;
      break;
    }
    const nx = x + dx[prev];
    const ny = y + dy[prev];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
      prev = (prev + 1) % 4;
      queue.push([x, y, dust]);
      continue;
    }
    queue.push([nx, ny, board[nx][ny]]);
    board[nx][ny] = dust;
  }
  let [downCleanerX, downCleanerY] = cleaner[1];
  prev = 0;
  const queue2 = [[downCleanerX, downCleanerY + 1, board[downCleanerX][downCleanerY + 1]]];
  board[downCleanerX][downCleanerY + 1] = 0;
  while (queue2.length > 0) {
    const [x, y, dust] = queue2.shift();
    if (x === downCleanerX && y === downCleanerY) {
      board[x][y] = -1;
      break;
    }
    const nx = x + dx[prev];
    const ny = y + dy[prev];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
      prev = (prev + 3) % 4;
      queue2.push([x, y, dust]);
      continue;
    }
    queue2.push([nx, ny, board[nx][ny]]);
    board[nx][ny] = dust;
  }
};

for (let i = 0; i < t; i++) {
  board = spreadDust();
  operateCleaner(cleaner);
}

let answer = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] > 0) {
      answer += board[i][j];
    }
  }
}

console.log(answer);

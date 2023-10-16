// 빙산
// https://www.acmicpc.net/problem/2573

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let iceBoard = input.slice(1).map((val) => val.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 빙산 녹이기
const melt = () => {
  const newBoard = Array.from(Array(N), () => Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++)
      if (iceBoard[i][j] > 0) {
        let count = 0;
        for (let [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (iceBoard[nx][ny] === 0) count++;
        }
        newBoard[i][j] = Math.max(0, iceBoard[i][j] - count);
      }
  }
  return newBoard;
};

// 빙산 덩어리 개수 세기
const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (visited[nx][ny] || iceBoard[nx][ny] === 0) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

let year = 0;

while (true) {
  let count = 0;
  visited.forEach((row) => row.fill(false));
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      if (iceBoard[i][j] > 0 && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
  if (count === 0) {
    year = 0;
    break;
  }
  if (count >= 2) break;
  iceBoard = melt();
  year++;
}

console.log(year);

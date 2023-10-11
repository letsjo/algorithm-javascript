// 전쟁 - 전투
// https://www.acmicpc.net/problem/1303

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [size, ...arr] = input;
const [N, M] = size.split(' ').map(Number);

const visited = Array.from(Array(M), () => Array(N).fill(0));

let w = 0;
let b = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs(x, y, color) {
  let queue = [];
  queue.push([x, y]);
  visited[x][y] = 1;
  let cnt = 1;

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (visited[nx][ny] === 0 && arr[nx][ny] === color) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
          cnt++;
        }
      }
    }
  }

  if (color === 'W') {
    w += cnt * cnt;
  } else {
    b += cnt * cnt;
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === 0) {
      const color = arr[i][j];
      bfs(i, j, color);
    }
  }
}

console.log(w, b);

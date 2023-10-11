// 미로 탐색
// https://www.acmicpc.net/problem/2178

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((row) => row.split('').map(Number));

const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];
queue.push([0, 0]);

visited[0][0] = true;

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i += 1) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (0 <= nx && nx < n && 0 <= ny && ny < m && maze[nx][ny] === 1 && !visited[nx][ny]) {
      queue.push([nx, ny]);
      visited[nx][ny] = true;
      maze[nx][ny] = maze[x][y] + 1;
    }
  }
}

console.log(maze[n - 1][m - 1]);

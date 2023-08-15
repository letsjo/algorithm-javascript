// 바이러스
// https://www.acmicpc.net/problem/2606

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];

const grape = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const visited = Array(N + 1).fill(false);

for (let i = 2; i < input.length; i += 1) {
  const [a, b] = input[i].split(' ').map(Number);
  grape[a][b] = 1;
  grape[b][a] = 1;
}

let count = 0;

const dfs = (number) => {
  visited[number] = true;
  for (let i = 1; i <= N; i += 1) {
    if (grape[number][i] === 1 && !visited[i]) {
      count += 1;
      dfs(i);
    }
  }
};

dfs(1);

console.log(count);

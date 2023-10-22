// 플로이드
// https://www.acmicpc.net/problem/11404

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const fees = input.slice(2).map((val) => val.split(' ').map(Number));

const INF = 100001;
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(INF));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < M; i++) {
  const [a, b, c] = fees[i];

  graph[a][b] = Math.min(graph[a][b], c);
}

// k: 거쳐가는 노드, i: 출발 노드, j: 도착 노드
for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      const originalRouteCost = graph[i][j];
      const newRouteCost = graph[i][k] + graph[k][j];
      graph[i][j] = Math.min(originalRouteCost, newRouteCost);
    }
  }
}

let answer = '';

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (graph[i][j] === INF) {
      answer += '0 ';
    } else {
      answer += `${graph[i][j]} `;
    }
  }
  answer += '\n';
}

console.log(answer);

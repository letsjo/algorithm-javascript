// 햄버거 분배
// https://www.acmicpc.net/problem/19941

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const table = input[1].split('');
const visited = Array(N).fill(false);

let answer = 0;

for (let i = 0; i < N; i++) {
  if (table[i] === 'H') continue;
  for (let j = i - K; j <= i + K; j++) {
    if (j < 0 || j >= N || visited[j] || table[j] === 'P') continue;
    visited[j] = true;
    answer++;
    break;
  }
}

console.log(answer);

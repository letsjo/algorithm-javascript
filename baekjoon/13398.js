// 연속합 2
// https://www.acmicpc.net/problem/13398

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

const dp = Array.from(Array(n), () => new Array(2).fill(0));
// const dp = Array(n).fill([0, 0]);
// [0,0] 똑같은 메모리의 배열값이 채워지기 때문에 밑에서 다 같이 바뀌는 현상이 생긴다.

dp[0][0] = numbers[0];
dp[0][1] = numbers[0];

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.max(dp[i - 1][0] + numbers[i], numbers[i]);
  dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + numbers[i]);
}

let answer = -Infinity;

for (let i = 0; i < n; i++) {
  answer = Math.max(answer, dp[i][0], dp[i][1]);
}

console.log(answer);

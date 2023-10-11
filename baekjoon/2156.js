// 포도주 시식
// https://www.acmicpc.net/problem/2156

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const wines = input.slice(1).map(Number);

const dp = new Array(n + 1).fill(0);

dp[1] = wines[0];
dp[2] = wines[0] + wines[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + wines[i - 1], dp[i - 3] + wines[i - 2] + wines[i - 1]);
}

console.log(dp[n]);

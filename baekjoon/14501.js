// 퇴사
// https://www.acmicpc.net/problem/14501

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const schedules = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array(N + 1).fill(0);

for (let i = 0; i < N; i += 1) {
  const [T, P] = schedules[i];

  if (i + T <= N) {
    dp[i + T] = Math.max(dp[i + T], dp[i] + P);
  }

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
}

console.log(dp[N]);

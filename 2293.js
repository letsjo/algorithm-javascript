// 동전 1
// https://www.acmicpc.net/problem/2293

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [info, ...type] = input;
const [n, k] = info.split(' ').map(Number);

const dp = Array(k + 1).fill(0);

dp[0] = 1;

for (let i = 0; i < n; i += 1) {
  for (let j = type[i]; j <= k; j++) {
    dp[j] += dp[j - type[i]];
  }
}

console.log(dp[k]);

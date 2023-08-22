// 정수 삼각형
// https://www.acmicpc.net/problem/1932

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const triangle = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from(Array(N), () => Array(N).fill(0));
dp[0][0] = triangle[0][0];

for (let i = 1; i < N; i += 1) {
  for (let j = 0; j <= i; j += 1) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[N - 1]));

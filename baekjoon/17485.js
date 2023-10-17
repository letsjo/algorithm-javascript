// 진우의 달 여행 (Large)
// https://www.acmicpc.net/problem/17485

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const fuelConsumption = input.slice(1).map((val) => val.split(' ').map(Number));
const dp = Array.from(Array(N), () => Array.from(Array(M), () => Array(3).fill(Infinity)));

for (let i = 0; i < M; i++) {
  dp[0][i][0] = fuelConsumption[0][i];
  dp[0][i][1] = fuelConsumption[0][i];
  dp[0][i][2] = fuelConsumption[0][i];
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (j > 0) {
      dp[i][j][0] = Math.min(dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]) + fuelConsumption[i][j];
    }
    dp[i][j][1] = Math.min(dp[i - 1][j][0], dp[i - 1][j][2]) + fuelConsumption[i][j];
    if (j < M - 1) {
      dp[i][j][2] = Math.min(dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]) + fuelConsumption[i][j];
    }
  }
}

let answer = Infinity;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < 3; j++) {
    answer = Math.min(answer, dp[N - 1][i][j]);
  }
}

console.log(answer);

// 흙길 보수하기
// https://www.acmicpc.net/problem/1911

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const puddles = input.slice(1).map((value) => value.split(' ').map(Number));

puddles.sort((a, b) => a[0] - b[0]);

let answer = 0;
let start = 0;
let end = 0;

for (let i = 0; i < puddles.length; i++) {
  start = puddles[i][0];
  end = puddles[i][1];

  if (start >= end) continue;

  while (start < end) {
    if (start + l > end) {
      answer++;
      while (puddles[i + 1] && puddles[i + 1][0] <= start + l) {
        puddles[i + 1][0] = start + l;
        if (puddles[i + 1][0] >= puddles[i + 1][1]) {
          i++;
        } else {
          break;
        }
      }
      break;
    } else {
      answer++;
      start += l;
    }
  }
}

console.log(answer);

// 이름 궁합
// https://www.acmicpc.net/problem/15312

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const alpha = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];

const A = input[0];
const B = input[1];

let result = [];
const len = A.length > B.length ? A.length : B.length;

for (let i = 0; i < len; i++) {
  if (A[i]) result.push(alpha[A.charCodeAt(i) - 65]);
  if (B[i]) result.push(alpha[B.charCodeAt(i) - 65]);
}

while (result.length > 2) {
  const temp = [];
  for (let i = 0; i < result.length - 1; i++) {
    temp.push((result[i] + result[i + 1]) % 10);
  }
  result = [...temp];
}

console.log(`${result[0]}${result[1]}`);

// 부분합
// https://www.acmicpc.net/problem/1806

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let start = 0;
let end = 0;
let sum = 0;
let min = Infinity;

while (start <= end && end <= n) {
  if (sum >= s) {
    min = Math.min(min, end - start);
    sum -= arr[start];
    start++;
  } else {
    sum += arr[end];
    end++;
  }
}

console.log(min === Infinity ? 0 : min);

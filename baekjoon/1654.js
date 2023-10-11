// 랜선 자르기
// https://www.acmicpc.net/problem/1654

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const [k, n] = input[0].split(' ');

const lines = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...lines);

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  let count = 0;
  for (let i = 0; i < k; i += 1) {
    count += parseInt(lines[i] / mid);
  }

  if (count < n) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);

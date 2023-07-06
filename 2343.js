// 기타 레슨
// https://www.acmicpc.net/problem/2343

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const [n, m] = input[0].split(' ').map(Number);
const lessons = input[1].split(' ').map(Number);

let start = Math.max(...lessons);
let end = lessons.reduce((a, b) => a + b);

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let count = 1;
  let total = 0;

  for (let i = 0; i < n; i += 1) {
    if (total + lessons[i] > mid) {
      count += 1;
      total = 0;
    }
    total += lessons[i];
  }

  if (count > m) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(start);

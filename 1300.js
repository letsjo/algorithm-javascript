// K번째 수
// https://www.acmicpc.net/problem/1300

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const [n, k] = input.map(Number);

let start = 0;
let end = k;

while (start < end) {
  let mid = parseInt((start + end) / 2);

  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    count += Math.min(parseInt(mid / i), n);
  }

  if (count < k) {
    start = mid + 1;
  } else {
    end = mid;
  }
}

console.log(end);

// 전자레인지
// https://www.acmicpc.net/problem/10162

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [time] = input;
let t = Number(time);

const btn = [300, 60, 10];
const result = Array(3).fill(0);

for (let i = 0; i < btn.length; i += 1) {
  if (t >= btn[i]) {
    result[i] = Math.floor(t / btn[i]);
    t -= result[i] * btn[i];
  }
}

if (t !== 0) {
  console.log(-1);
} else {
  console.log(result.join(' '));
}

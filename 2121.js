// 넷이 놀기
// https://www.acmicpc.net/problem/2121

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const [width, height] = input.shift().split(' ').map(Number);

const points = new Set();

let count = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.add([x, y]);
}

for (let [x, y] of points) {
  if (
    points.has([x + width, y]) &&
    points.has([x, y + height]) &&
    points.has([x + width, y + height])
  ) {
    count++;
  }
}

console.log(count);

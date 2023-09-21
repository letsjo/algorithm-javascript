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

const pointList = [];
const points = new Map();

let count = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  pointList.push([x, y]);
  if (!points.has(x)) {
    points.set(x, []);
  }

  points.get(x).push(y);
}

for (let [x, y] of pointList) {
  if (points.has(x + width) && points.get(x + width).includes(y)) {
    if (points.has(x) && points.get(x).includes(y + height)) {
      if (points.has(x + width) && points.get(x + width).includes(y + height)) {
        count++;
      }
    }
  }
}

console.log(count);

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
const pointDic = new Map();

let count = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  pointList.push([x, y]);
  if (!pointDic.has(x)) {
    pointDic.set(x, []);
  }

  pointDic.get(x).push(y);
}

for (let [xPoint, yPoint] of pointList) {
  if (pointDic.get(xPoint).includes(yPoint + height) && pointDic.has(xPoint + width)) {
    if (
      pointDic.get(xPoint + width).includes(yPoint) &&
      pointDic.get(xPoint + width).includes(yPoint + height)
    ) {
      count += 1;
    }
  }
}

console.log(count);

// 센서
// https://www.acmicpc.net/problem/2212

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input;
const sensor = input[2].split(' ').map(Number);
sensor.sort((a, b) => a - b);

let distanceBetweenEachSensor = [];

for (let i = 0; i < sensor.length - 1; i += 1) {
  distanceBetweenEachSensor.push(sensor[i + 1] - sensor[i]);
}

distanceBetweenEachSensor.sort((a, b) => b - a);

let answer = 0;
for (let i = k - 1; i < distanceBetweenEachSensor.length; i += 1) {
  answer += distanceBetweenEachSensor[i];
}

console.log(answer);

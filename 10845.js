// 큐
// https://www.acmicpc.net/problem/10845

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

let n = input.shift();

let queue = [];
let answer = [];

for (let i = 0; i < n; i++) {
  let command = input[i].split(' ');

  switch (command[0]) {
    case 'push':
      queue.push(Number(command[1]));
      break;
    case 'pop':
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case 'size':
      answer.push(queue.length);
      break;
    case 'empty':
      answer.push(queue.length ? 0 : 1);
      break;
    case 'front':
      answer.push(queue.length ? queue[0] : -1);
      break;
    case 'back':
      answer.push(queue.length ? queue[queue.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join('\n'));

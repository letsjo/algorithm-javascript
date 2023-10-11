// 최대 힙
// https://www.acmicpc.net/problem/11279

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

const heap = [0];

function swap(a, b) {
  [heap[a], heap[b]] = [heap[b], heap[a]];
}

function insert(value) {
  heap.push(value);

  let index = heap.length - 1;

  while (index > 1 && heap[Math.floor(index / 2)] < heap[index]) {
    swap(Math.floor(index / 2), index);
    index = Math.floor(index / 2);
  }
}

function remove() {
  if (heap.length === 1) {
    return 0;
  }

  const result = heap[1];
  heap[1] = heap[heap.length - 1];
  heap.pop();

  let index = 1;

  while (index * 2 < heap.length) {
    let max = heap[index * 2];
    let maxIndex = index * 2;

    if (index * 2 + 1 < heap.length && max < heap[index * 2 + 1]) {
      max = heap[index * 2 + 1];
      maxIndex = index * 2 + 1;
    }

    if (heap[index] > max) {
      break;
    }

    swap(index, maxIndex);
    index = maxIndex;
  }

  return result;
}

let result = '';

for (let i = 0; i < N; i++) {
  const num = Number(input[i]);

  if (num === 0) {
    result += `${remove()}\n`;
  } else {
    insert(num);
  }
}

console.log(result.trim());

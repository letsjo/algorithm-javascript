// 공정 컨설턴트 호석
// https://www.acmicpc.net/problem/22254

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return parseInt((index - 1) / 2);
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  insert(key, value) {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftIndex(index) < count) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);

      const smallerIndex =
        rightIndex < count && this.heap[rightIndex].key < this.heap[leftIndex].key
          ? rightIndex
          : leftIndex;

      if (this.heap[smallerIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerIndex];
        index = smallerIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  }
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue(priority, value) {
    this.insert(priority, value);
  }

  dequeue() {
    const node = this.remove();
    return node && node.value;
  }

  isEmpty() {
    return this.heap.length <= 0;
  }
}

const [n, x] = input[0].split(' ').map(Number);
const times = input[1].split(' ').map(Number);

let left = 1;
let right = n;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (isPossible(mid)) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);

function isPossible(mid) {
  const heapq = new PriorityQueue();

  for (let i = 0; i < mid; i++) {
    heapq.enqueue(0, 0);
  }

  for (let i = 0; i < n; i++) {
    let time = heapq.dequeue();
    time += times[i];
    if (time > x) return false;
    heapq.enqueue(time, time);
  }

  return true;
}

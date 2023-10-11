// 트리의 부모 찾기
// https://www.acmicpc.net/problem/11725

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

let tree = Array.from(Array(N + 1), () => []);
let parent = Array.from(Array(N + 1).fill(0));
let visited = Array.from(Array(N + 1).fill(false));

for (let i = 0; i < N - 1; i++) {
  let [vertexA, vertexB] = input[i].split(' ').map(Number);
  tree[vertexA].push(vertexB);
  tree[vertexB].push(vertexA);
}

let stack = [1];
visited[1] = true;

while (stack.length > 0) {
  let number = stack.pop();
  for (let vertex of tree[number]) {
    if (!visited[vertex]) {
      parent[vertex] = number;
      visited[vertex] = true;
      stack.push(vertex);
    }
  }
}

console.log(parent.slice(2).join('\n'));

// 시간초과

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.parent = null;
//     this.children = [];
//   }
// }

// class Tree {
//   constructor() {
//     this.root = new Node(1);
//   }

//   insert(data, parentData) {
//     const newNode = new Node(data);

//     this.traverse((node) => {
//       if (node.data === parentData) {
//         node.children.push(newNode);
//         newNode.parent = node;
//       }
//     });
//   }

//   traverse(callback) {
//     const go = (node) => {
//       callback(node);
//       node.children.forEach((child) => go(child));
//     };

//     go(this.root);
//   }

//   find(data) {
//     let result = null;

//     this.traverse((node) => {
//       if (node.data === data) {
//         result = node;
//       }
//     });

//     return result;
//   }
// }

// const N = Number(input[0]);
// const tree = new Tree();
// const visited = Array(N + 1).fill(false);

// visited[1] = true;

// for (let i = 1; i < N; i++) {
//   const [vertexA, vertexB] = input[i].split(' ').map(Number);
//   if (!visited[vertexA]) {
//     tree.insert(vertexA, vertexB);
//     visited[vertexA] = true;
//   } else {
//     tree.insert(vertexB, vertexA);
//     visited[vertexB] = true;
//   }
// }

// for (let i = 2; i <= N; i++) {
//   const findNode = tree.find(i);
//   console.log(findNode.parent.data);
// }

// 시간초과

// const N = Number(input[0]);
// const tree = Array.from(Array(N + 1), () => []);
// const parents = Array(N + 1).fill(0);
// const visited = Array(N + 1).fill(false);

// for (let i = 1; i < N; i++) {
//   const [vertexA, vertexB] = input[i].split(' ').map(Number);
//   tree[vertexA].push(vertexB);
//   tree[vertexB].push(vertexA);
// }

// const dfs = (vertex) => {
//   visited[vertex] = true;

//   for (let i = 0; i < tree[vertex].length; i++) {
//     const next = tree[vertex][i];

//     if (!visited[next]) {
//       parents[next] = vertex;
//       dfs(next);
//     }
//   }
// };

// dfs(1);

// for (let i = 2; i <= N; i++) {
//   console.log(parents[i]);
// }

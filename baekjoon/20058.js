// 마법사 상어와 파이어스톰
// https://www.acmicpc.net/problem/20058

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, Q] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(' ').map(Number));
const L = map.pop().map(Number);
const mapSize = 2 ** N;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const rotateIceBlock = (x, y, l) => {
  const temp = Array.from(Array(l), () => new Array(l).fill(0));

  for (let i = 0; i < l; i += 1) {
    for (let j = 0; j < l; j += 1) {
      temp[i][j] = map[y + l - 1 - j][x + i];
    }
  }

  for (let i = 0; i < l; i += 1) {
    for (let j = 0; j < l; j += 1) {
      map[y + i][x + j] = temp[i][j];
    }
  }
};

const meltIceBlock = () => {
  const temp = Array.from(Array(mapSize), () => new Array(mapSize).fill(0));

  for (let i = 0; i < mapSize; i += 1) {
    for (let j = 0; j < mapSize; j += 1) {
      if (map[i][j] === 0) continue;

      let count = 0;

      for (let k = 0; k < 4; k += 1) {
        const nx = j + dx[k];
        const ny = i + dy[k];

        if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
        if (map[ny][nx] > 0) count += 1;
      }

      if (count < 3) temp[i][j] = map[i][j] - 1;
      else temp[i][j] = map[i][j];
    }
  }

  for (let i = 0; i < mapSize; i += 1) {
    for (let j = 0; j < mapSize; j += 1) {
      map[i][j] = temp[i][j];
    }
  }
};

const bfs = (x, y) => {
  let count = 1;
  const queue = [[x, y]];
  const visited = Array.from(Array(mapSize), () => new Array(mapSize).fill(false));
  visited[y][x] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
      if (visited[ny][nx] || map[ny][nx] === 0) continue;

      visited[ny][nx] = true;
      queue.push([nx, ny]);
      count += 1;
    }
  }

  return count;
};

for (let i = 0; i < Q; i += 1) {
  const l = 2 ** L[i];

  for (let j = 0; j < mapSize; j += l) {
    for (let k = 0; k < mapSize; k += l) {
      rotateIceBlock(k, j, l);
    }
  }
  meltIceBlock();
}

let sum = 0;
let max = 0;
const visited = Array.from(Array(mapSize), () => new Array(mapSize).fill(false));

for (let i = 0; i < mapSize; i += 1) {
  for (let j = 0; j < mapSize; j += 1) {
    sum += map[i][j];

    if (map[i][j] === 0 || visited[i][j]) continue;

    const count = bfs(j, i);
    max = Math.max(max, count);
  }
}

console.log(`${sum}\n${max}`);

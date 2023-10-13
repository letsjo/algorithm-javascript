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
const iceMap = input.slice(1).map((line) => line.split(' ').map(Number));
const L = iceMap.pop().map(Number);
const mapSize = 2 ** N;

/**
 * 아이스블록을 회전시키는 함수
 * @param {number} x // 회전시킬 아이스블록의 x좌표
 * @param {number} y // 회전시킬 아이스블록의 y좌표
 * @param {number} l // 회전시킬 아이스블록의 크기
 * @returns {void}
 */
const rotateIceBlock = (x, y, l) => {
  const temp = Array.from(Array(l), () => new Array(l).fill(0));

  // 아이스블록을 90도 회전시키기
  // l = 2
  // temp[0][0] => iceMap[0+2-1-0][0+0] = iceMap[1][0];
  // temp[0][1] => iceMap[0+2-1-1][0+0] = iceMap[0][0];
  // temp[1][0] => iceMap[0+2-1-0][0+1] = iceMap[1][1];
  // temp[1][1] => iceMap[0+2-1-1][0+1] = iceMap[0][1];
  for (let i = 0; i < l; i += 1) {
    for (let j = 0; j < l; j += 1) {
      temp[i][j] = iceMap[y + l - 1 - j][x + i];
    }
  }

  for (let i = 0; i < l; i += 1) {
    for (let j = 0; j < l; j += 1) {
      iceMap[y + i][x + j] = temp[i][j];
    }
  }
};

/**
 * 얼음 녹이는 함수
 * @returns {void}
 */
const meltIceBlock = () => {
  const temp = Array.from(Array(mapSize), () => new Array(mapSize).fill(0));

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  for (let i = 0; i < mapSize; i += 1) {
    for (let j = 0; j < mapSize; j += 1) {
      if (iceMap[i][j] === 0) continue;

      let count = 0;

      for (let k = 0; k < 4; k += 1) {
        const nx = j + dx[k];
        const ny = i + dy[k];

        if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
        if (iceMap[ny][nx] > 0) count += 1;
      }

      if (count < 3) temp[i][j] = iceMap[i][j] - 1;
      else temp[i][j] = iceMap[i][j];
    }
  }

  for (let i = 0; i < mapSize; i += 1) {
    for (let j = 0; j < mapSize; j += 1) {
      iceMap[i][j] = temp[i][j];
    }
  }
};

/**
 * 연결된 아이스블록의 갯수를 세는 함수
 * @param {*} x
 * @param {*} y
 * @returns {number} 연결된 아이스블록의 갯수
 */
const bfs = (x, y) => {
  const visited = Array.from(Array(mapSize), () => new Array(mapSize).fill(false));
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const queue = [[x, y]];
  let count = 1;

  visited[y][x] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
      if (visited[ny][nx] || iceMap[ny][nx] === 0) continue;

      visited[ny][nx] = true;
      queue.push([nx, ny]);
      count += 1;
    }
  }

  return count;
};

for (let i = 0; i < Q; i += 1) {
  // 회전시킬 아이스블록의 크기
  const l = 2 ** L[i];

  for (let j = 0; j < mapSize; j += l) {
    for (let k = 0; k < mapSize; k += l) {
      rotateIceBlock(j, k, l);
    }
  }
  meltIceBlock();

  console.log(iceMap);
}

let sum = 0;
let max = 0;
const visited = Array.from(Array(mapSize), () => new Array(mapSize).fill(false));

for (let i = 0; i < mapSize; i += 1) {
  for (let j = 0; j < mapSize; j += 1) {
    sum += iceMap[i][j];

    if (iceMap[i][j] === 0 || visited[i][j]) continue;

    const count = bfs(j, i);
    max = Math.max(max, count);
  }
}

console.log(`${sum}\n${max}`);

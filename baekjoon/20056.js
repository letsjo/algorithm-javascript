// 마법사 상어와 파이어볼
// https://www.acmicpc.net/problem/20056

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

let fireballs = [];

const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1];

for (let i = 1; i <= M; i++) {
  const [r, c, m, s, d] = input[i].split(' ').map(Number);
  fireballs.push([r - 1, c - 1, m, s, d]);
}

const move = (fireballsData) => {
  const collisionData = new Map();

  for (let i = 0; i < fireballsData.length; i++) {
    const [r, c, m, s, d] = fireballsData[i];
    let nr = (r + dr[d] * s) % N;
    let nc = (c + dc[d] * s) % N;
    if (nr < 0) nr += N;
    if (nc < 0) nc += N;

    const nData = [m, s, d];

    if (!collisionData.get(`${nr},${nc}`)) collisionData.set(`${nr},${nc}`, [nData]);
    else {
      const prev = collisionData.get(`${nr},${nc}`);
      collisionData.set(`${nr},${nc}`, [...prev, nData]);
    }
  }

  return collisionData;
};

const divide = (collisionData) => {
  const fireballsWithDivide = [];

  collisionData.forEach((collisions, position) => {
    const [r, c] = position.split(',').map(Number);
    if (collisions.length >= 2) {
      let even = 0;
      let mass = 0;
      let speed = 0;
      collisions.forEach((collision) => {
        const [m, s, d] = collision;
        if (d % 2 === 0) even++;
        mass += m;
        speed += s;
      });

      mass = Math.floor(mass / 5);
      if (mass !== 0) {
        speed = Math.floor(speed / collisions.length);
        if (even === 0 || even === collisions.length)
          for (let i = 0; i <= 6; i += 2) fireballsWithDivide.push([r, c, mass, speed, i]);
        else for (let i = 1; i <= 7; i += 2) fireballsWithDivide.push([r, c, mass, speed, i]);
      }
    } else {
      fireballsWithDivide.push([...[r, c], ...collisions[0]]);
    }
  });

  return fireballsWithDivide;
};

for (let i = 0; i < K; i++) {
  const collisions = move(fireballs);
  const fireballsWithDivide = divide(collisions);
  fireballs = fireballsWithDivide;
}

const answer = fireballs.reduce((acc, cur) => acc + cur[2], 0);

console.log(answer);

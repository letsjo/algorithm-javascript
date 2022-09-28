// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split('\n');

const solution = (input) => {
    const [a, b] = (input + '').split(' ').map(s => +s);
    console.log(a + b);
}

solution(input);
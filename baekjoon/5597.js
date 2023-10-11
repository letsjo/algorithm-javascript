let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);

const array = Array(30).fill(0);

input.forEach(num => array[num - 1] = 1);

array.forEach((number, index) => { if (number === 0) console.log(index + 1) });
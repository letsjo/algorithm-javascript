let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).trim().split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).trim().split("\n");

let [str, bomb] = input;

let j = 0;
const stack1 = [];
const stack2 = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === bomb[0]) {
    j = 1;
  } else if (str[i] === bomb[j]) {
    j++;
  } else {
    j = 0;
  }
  stack1.push(str[i]);
  stack2.push(j);
  if (j === bomb.length) {
    for (let k = 0; k < bomb.length; k++) {
      stack1.pop();
      stack2.pop();
    }
    stack2.length === 0 ? j = 0 : j = stack2[stack2.length - 1];
  }
}
stack1.length === 0 ? console.log("FRULA") : console.log(stack1.join(''));
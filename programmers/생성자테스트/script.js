function programmer() {
  this.isSmart = false;
  this.upgrade = function (version) {
    this.isSmart = !!version;
    work();
  };
}
function work() {
  if (this.isSmart) {
    console.log("I can do my work! I am smart!");
  }
}

var programmer = new programmer();
programmer.upgrade(1.1);

console.log(isInPage([399,400]));

function isInPage([leftPage,rightPage]) {
  return rightPage-leftPage==1 &&
        leftPage % 2 === 1 &&
        rightPage % 2 === 0 &&
        [leftPage,rightPage].every((page) => 1 < page && page < 400);
}
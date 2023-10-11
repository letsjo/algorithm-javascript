let source = "abbabaa";
let target = "bb";
const order = [7,1,2,5,4,3,6];

console.log(solution(order,source,target));

function solution(order,source,target) {
  // 정규식 만들기 
  let pattern = new RegExp(target.split('').join('.*'));
  let count = 0;

  for(let i = 0; i < order.length; i++) {
    source = source.substring(0, order[i]-1)+"-"+source.substring(order[i]);
    if (source.search(pattern)==-1)
      return count;
    count++;
  }
}

function solution(order,source,target) {
  // 정규식 만들기
  let count = 0;
  for(let i = 0; i < order.length; i++) {
    source = source.substring(0, order[i]-1)+"-"+source.substring(order[i]);
    let searchString = source;
    for (let j = 0; j < target.length; j++) {
      let findIndex = searchString.indexOf(target[j]);
      if(findIndex==-1){
        return count;
      } else {
        searchString = searchString.substring(findIndex+1);
      }
    }
    count++;
  }
}
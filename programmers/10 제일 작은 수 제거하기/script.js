/*

문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

입출력 예
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1]

*/

let arr=[4, 3, 2, 1, 1, 1]; 

console.log(solution(arr));


// 고려사항
// 1. 작은 값을 삭제하면된다.

function solution(answer) {
    let smallest = arr.sort((a,b) => b - a).pop();
    console.log(smallest);
    // 역순 정렬한 후 pop 으로 가장 뒤에 수를 날림
    // 그래도 실패뜸
    arr = arr.filter(function(x){return smallest!= x});
    // 가장 작은수가 여러개 중복일 수도 있겠구나 해서 중복값도 없앰.
    return arr.length!=0?arr:[-1];
}


// 테스트 코드 는 성공했는데, 조건이 맞지 않았음.
// 순서를 신경쓰지 않았는데 조건 사항
// [인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.] 가 있었다..
// 

// (코드점수 8점)

// 고려사항 
// 1. 작은 값을 삭제해야한다.
// 2. 인덱스 순서를 바꾸면 안된다.
// 3. 작은 값이 여러개 있을 수 있다.

function solution(arr)
{
  if (arr.length < 1) return [-1];
  // 입력 배열 길이가 1개일 정우 바로 [-1];
  const smallest = Math.min(...arr);
  // 가장 작은 값찾기
  arr = arr.filter(function(x){return smallest!= x});
  // filter 함수
  // arr 요소 1개씩 빼서 x에 넣는다.
  // 그리고 smallest 와 x 가 작은 값을 삭제한다.
  return arr
}

// 유사 베스트 풀이 해석
// 
function solution_best(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  // Math.min 으로 최소값 찾은후 [예: -1]
  // indoxOf 로 위치를 찾는다. [예: 출력: 5] (5번째)
  // arr 에서 가장 작은값인덱스에서 1개까지 지운다.
  if(arr.length<1)return[-1];
  // 그리고 길이가 0개면 [-1] 출력
  
  // 근데 문제에 중복값이 없다고는 안했는데, 이 함수는 최소값이 2개 이상이면, 최소값이 남아 있을 수 있음.
  
  // 이라 생각 했는데,
  // 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다." 라는 조건이 있어서 [4, 3, 2, 1, 1, 1, 1] 같은 배열은 존재할 수 없습니다

  // 저 문장이 중복값이 있을 수가 없다고 함..
  // 잘 모르겠음.
    
    return arr;
}
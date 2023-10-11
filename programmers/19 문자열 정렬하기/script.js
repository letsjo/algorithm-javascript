// 문자열 내 마음대로 정렬하기
// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
// 입출력 예
// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.


let strings = ["abce", "abcd", "cdx"];
let n = 2;
//["abcd", "abce", "cdx"]
console.log(solution(strings, n));

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (b[n] > a[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });
}


function solution_2(strings, n) {
  var answer = strings.map((string) => {
    string = string[n] + string;
    console.log(string);
    return string;
  })
  answer = answer.sort();
  answer = answer.map((string) => {
    return string.substr(1);
  })

  return answer;
}



// 베스트 답안지


function solution_best(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

// localeCompare(StringcompareString[, Stringlocales[, Objectoptions]])
// 인수로 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수,
// 그 반대의 경우는 양수, 동등한 경우에는 0을 반환한다.

// // var str = "JavaScript";

// // 알파벳 순서 정렬상 인수 'apple'은 'JavaScript'보다는 앞쪽에 있다.
// console.log(str.localeCompare("apple"));
// 결과값 > 1
// // 알파벳 순서 정렬상 인수 'kiss'은 'JavaScript'보다는 뒤쪽에 있다.
// console.log(str.localeCompare("kiss"));
// 결과값 > -1
// // 알파벳 순서 정렬상 인수 'JavaScript'는 'JavaScript'와 동등한 위치에 있다.
// console.log(str.localeCompare("JavaScript"));
// 결과값 > 0
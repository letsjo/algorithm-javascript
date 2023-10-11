/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120830
 */

// 내가 푼 정답

function solution(n) {
    return Array(n).fill(0).reduce((sum, v, i) => sum += (i + 1) % 2 === 0 ? i + 1 : 0);
}

console.log(solution(10));

// 추천 풀이

function recommend(n) {
    return Array(n).fill().map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c);
}

console.log(recommend(10));


/**
 * ! 설명
 * 
 * 배열을 채우는 방법 여러가지
 * 1. Array(100).fill(0)
 * 2. '0'.repeat(100).split('')
 * 3. Array.from({length: 100}, (value, index) => (0));
 * 4. [...Array(100)].map((value, index) => (0));
 * 
 * Array.prototype.reduce((누산기,현재값,인덱스,원본배열)=>(),초기값)
 * 
 */
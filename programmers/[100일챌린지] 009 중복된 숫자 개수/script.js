/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120583
 */

// 내가 푼 정답

function solution(array, n) {
    return array.filter(value => value === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));

// 추천 풀이

function recommend(array, n) {
    return array.filter(v => v === n).length;
}

console.log(recommend([1, 1, 2, 3, 4, 5], 1));

/**
 * ! 설명
 * 
 * 
 * 
 */
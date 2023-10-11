/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120817
 */

// 내가 푼 정답

function solution(numbers) {
    return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]));

// 추천 풀이

function recommend(numbers) {
    return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}

console.log(recommend([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


/**
 * ! 설명
 * 
 * 
 */
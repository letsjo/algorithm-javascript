/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120822
 */

// 내가 푼 정답

function solution(my_string) {
    return my_string.split('').map((v, index) => my_string[my_string.length - 1 - index]).join('');
}

console.log(solution("jaron"));

// 추천 풀이

function recommend(my_string) {
    console.log(Array.from(my_string));
    return Array.from(my_string).reverse().join('');
}

console.log(recommend("jaron"));

/**
 * ! 설명
 * Array.from('jaron') => [ 'j', 'a', 'r', 'o', 'n' ]
 * Array.prototype.reverse() : 배열 뒤집기
 */
/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120822
 */

// 내가 푼 정답

function solution(my_string, letter) {
    return my_string.split('').map((my_letter) => my_letter === letter ? '' : my_letter).join('');
}

console.log(solution("BCBdbe", "B"));

// 추천 풀이

function recommend(my_string, letter) {
    let reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '');
}

console.log(recommend("BCBdbe", "B"));

/**
 * ! 설명
 * "BCBdbe".replaceAll('B','');
 * 
 * * 정규표현식
 * "BCBdbe".replace(/B/g,'');
 * g : global
 * 
 * * 변수를 정규표현식에 담을 때,
 * let reg = new RegExp(letter, 'g');
 * 
 */
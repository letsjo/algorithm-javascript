/**
 * ! [JavaScript 알고리즘 100일 챌린지]
 * https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
 * 
 * ! 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/120830
 */

// 내가 푼 정답

function solution(n, k) {
    const foodPrice = 12000;
    const drinkPrice = 2000;
    const countFreeDrink = ~~(n / 10);
    return foodPrice * n + drinkPrice * (k - countFreeDrink);
}

console.log(solution(10, 3));

// 추천 풀이

function solution(n, k) {
    if (n >= 10) {
        k -= ~~(n / 10);
    }
    return 12000 * n + 2000 * k;
}

console.log(recommend(64, 6));


/**
 * ! 설명
 * 
 * 
 * 
 */
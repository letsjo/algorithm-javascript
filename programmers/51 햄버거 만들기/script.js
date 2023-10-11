function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        console.log(stk);
        if (
            stk[stk.length - 1] === 1 &&
            stk[stk.length - 2] === 3 &&
            stk[stk.length - 3] === 2 &&
            stk[stk.length - 4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
}

// function solution(ingredient) {
//     const recipe = [1, 2, 3, 1];
//     let answer = 0;
//     let count = 0;
//     let startIndex = 0;
//     for (let i = 0; i < ingredient.length; i++) {
//         if (ingredient[i] === 1 && count === 3) {
//             ingredient.splice(startIndex, 4);
//             count = 0;
//             answer += 1;
//             i = startIndex - 3;
//         } else if (ingredient[i] === 1 && count !== 3) {
//             count = 1;
//             startIndex = i;
//         } else if (ingredient[i] === recipe[count]) {
//             count++;
//         } else {
//             count = 0;
//         }
//     }
//     return answer;
// }

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
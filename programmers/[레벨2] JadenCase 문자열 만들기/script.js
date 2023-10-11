function solution(s) {
    let firstLetter = true;
    return s.split('').map((letter) => {
        if (firstLetter && letter !== ' ') {
            firstLetter = false;
            return letter.toUpperCase();
        }
        if (letter === ' ') firstLetter = true;
        return letter.toLowerCase();
    }).join('');
}

console.log(solution("3people unFollowed me"));
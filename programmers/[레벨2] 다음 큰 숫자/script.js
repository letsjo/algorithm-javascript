function solution(n) {
    var answer = "";
    let bin = n.toString(2);
    let countOne = 0;
    let firstOneIndex = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') countOne += 1;
        if (bin[i] === '1' && i !== 0 && firstOneIndex === bin.length) firstOneIndex = i;
    }

    console.log(countZero, countOne, firstOneIndex);

    for (let i = 0; i < bin.length; i++){
        if(i === firstOneIndex - 1 ) {
            answer += "1"
            countOne -= 1;
        };
        
    }

    return answer;
}

console.log(solution(78));
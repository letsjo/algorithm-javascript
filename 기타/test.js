console.log(removeDuplicatesLetters("browoanoommnnaon"));

function removeDuplicatesLetters(word){
    let answer=[word[0]];
    let top, del;
    for (let i = 1; i < word.length; i++) {
        top = answer[answer.length-1];
        if (del != word[i] & top != word[i]) {
            answer.push(word[i]);
            del="";
        } else {
            del = word[i];
            answer.pop();
        }
        console.log(answer.join(""));
    }
    return answer.join("");
}
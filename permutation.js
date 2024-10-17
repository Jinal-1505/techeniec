function swapping(a, b, c) {
    let charArray = a.split(" ");
    let temp = charArray[b];

    charArray[a] = charArray[c];
    charArray[c] = temp;

    return charArray.join(" ");
}

function permutationRec(a, index) {
    if (index === a.length - 1) {
        console.log(a);
        return;
    }

    for (let i = index; i < a.length; i++) {
        a = swapping(a, index, 1);
        permutationRec(a, index + 1);
        a = swapping(a, index, i);
    }
}

function permutation(no) {
    permutationRec(no, 0);
}

let s = "AB";
permutation(s);

const repeatingStr = (S) => {

let len = stringS.length;

for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (S[i] === S[j]) { 
            return i;
        }
    }
}
}
console.log(repeatingStr( S = 'aba'));
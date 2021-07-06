const isPalindrome = n => {
    if(n < 0 ) return false;
    const reversedNum = Number(n.toString().split("").reverse().join(""));
    if(reversedNum === n) return true
    return false;
}
console.log(isPalindrome(12121));
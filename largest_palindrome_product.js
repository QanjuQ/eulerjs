//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99

const isPalindrome = number => {
    const string = String(number);
    const midPoint = string.length / 2;
    return string.substring(0, midPoint) == string.substring(midPoint, string.length).split('').reverse().join('');
};

const largestPalindromeProduct = numberOfDigits => {
    const lowerLimit = +Array(numberOfDigits - 1).fill(9).join("") + 1;
    const upperLimit = +Array(numberOfDigits).fill(9).join("");
    let maxProduct = 0;
    for (let firstNumber = upperLimit; firstNumber >= lowerLimit; firstNumber--){
        for (let secondNumber = upperLimit; secondNumber >= lowerLimit; secondNumber--){
            let product = firstNumber * secondNumber;
            if (isPalindrome(product) && product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
};

module.exports = largestPalindromeProduct;

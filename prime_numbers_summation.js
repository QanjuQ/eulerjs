const isDivisibleBy = (number, factor) => number % factor == 0;

const addPrimeNumbers = limit => {
    let primes = [2];
    let sum = 2;
    for (let oddNumber = 3; oddNumber < limit; oddNumber = oddNumber + 2) {
        if (isDivisibleBy(oddNumber, 5)) {
            continue;
        }
        const primeNumberLessThanRoot = primes.filter(num => num <= Math.floor(Math.sqrt(oddNumber)));  
        if (primeNumberLessThanRoot.every(primeNumb => !isDivisibleBy(oddNumber, primeNumb))) {
            primes.push(oddNumber);
            sum = sum + oddNumber;
        }
    }
    return sum;
};

module.exports = addPrimeNumbers;


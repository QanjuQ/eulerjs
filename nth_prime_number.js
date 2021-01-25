const isDivisibleBy = (number, factor) => number % factor == 0;

const nthPrime = nth => {
    let primes = [2, 3];
    for (let oddNumber = 5; primes.length < nth; oddNumber = oddNumber + 2){
        const primeNumberLessThanRoot = primes.filter(num => num <= Math.sqrt(oddNumber));
        if (primeNumberLessThanRoot.every(primeNumb=>!isDivisibleBy(oddNumber,primeNumb))) {
            primes.push(oddNumber);
        }
    }
    return primes[nth-1];
}

module.exports = nthPrime;

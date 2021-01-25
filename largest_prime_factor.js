// Largest Prime Factor of number 600851475143

const isDivisibleBy = (number, factor) => (number % factor == 0);

const isPrime = candidate => {
	for (let number = 2; number <= Math.sqrt(number); number++) {
		if (isDivisibleBy(candidate, number)) {
			return false;
		}
	}
	return true;
};

const largestPrimeFactor = number => {
	let candidate = 2;
	let currentNumber = number;
	while(currentNumber > candidate){
		if (isPrime(candidate) && isDivisibleBy(currentNumber, candidate)) {
			currentNumber = currentNumber / candidate;
		} else {
			candidate = candidate + 1;
		}
	}
	return currentNumber;
};

module.exports = largestPrimeFactor;

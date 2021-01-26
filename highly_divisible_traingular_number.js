let previousPrimes = [2, 3];

const isDivisibleBy = (candidate, factor) => candidate % factor == 0;

const isPrime = (candidate) => {
	for (let number = 2; number <= Math.sqrt(candidate); number++) {
		if (isDivisibleBy(candidate, number)) {
			return false;
		}
	}
	return true;
};

const triangularNumber = nth => (nth * (nth + 1)) / 2;

const allPrimeNumbersBelowSqrt = (number) => {
	let primeNumbers = [2];
	const sqrtOfNumber = Math.sqrt(number);
	for (let primeCandidate = 3; primeCandidate < sqrtOfNumber; primeCandidate+=2) {
		if (isPrime(primeCandidate)) {
			primeNumbers.push(primeCandidate);
		}
	}
	return primeNumbers;
};

const createObjectWithKeysAndValueZero = (keys) =>
	keys.reduce((obj, key) => ({
		...obj,
		[key]: 0
	}), {});

const calculatePrimeFactorFrequency = (candidate) => {
	const primeNumbers = allPrimeNumbersBelowSqrt(candidate);
	let primeFactorsWithFrequency = createObjectWithKeysAndValueZero(primeNumbers);
	let number = candidate;
	let index = 0;
	while (index < primeNumbers.length) {
		const factor = primeNumbers[index];
		if (isDivisibleBy(number, factor)) {
			primeFactorsWithFrequency[factor] += 1;
			number = Math.floor(number/factor);
		} else {
			index += 1;
		}
	}
	return primeFactorsWithFrequency;
};

const triangularNumberWithNFactors = (count) => {
	let nth = 1;
	let number = 1;
	let noOfFactors = 1;
	do {
		number = triangularNumber(nth);
		let primeFactorsWithFrequency = calculatePrimeFactorFrequency(number);
		noOfFactors = Object.values(primeFactorsWithFrequency).reduce((product, curr) => product * (curr + 1), 1);
		nth = nth + 1;
	}while (noOfFactors < count);
	return number;
};

console.log(76576500, triangularNumberWithNFactors(500))

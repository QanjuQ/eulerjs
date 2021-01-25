let previousPrimes = [2, 3];

const isDivisibleBy = (candidate, factor) => candidate % factor == 0;

const isPrime = (candidate) => {
	for (let number = 2; number <= Math.sqrt(number); number++) {
		if (isDivisibleBy(candidate, number)) {
			return false;
		}
	}
	return true;
};

const numberOfFactors = (number, frequencies = {}) => {
	let candidate = number;
	while (isDivisibleBy(candidate, 2)) {
		candidate = Math.floor(candidate / 2);
		frequencies[2]++;
	}
	for (let index = 1; index < previousPrimes.length && candidate > 1; index++) {
		if (isDivisibleBy(candidate, previousPrimes[index])) {
			candidate = Math.floor(candidate / previousPrimes[index]);
			frequencies[previousPrimes[index]] = frequencies[previousPrimes[index]]++;
		}
	}
	return Object.values(frequencies).filter(ele=>ele!=0).reduce((a,b)=>a*++b,1);
};

const triangularNumber = nth => (nth * (nth + 1)) / 2;

const highlyDivisible = count => {
	let nth = 1;
	let number = 1;
	let numOfFactors = 1;
	do {
		for (let primeFactor = previousPrimes[previousPrimes.length - 1] + 2; primeFactor < Math.floor(Math.sqrt(number)); primeFactor= primeFactor + 2){
			if (isPrime(primeFactor)) {
				previousPrimes.push(primeFactor);
			}
		}
		number = triangularNumber(nth);
		numOfFactors = numberOfFactors(number, previousPrimes.reduce((obj, n) => ({ [n]: 0, ...obj }), {}));
		console.log(number, numOfFactors);
		nth = nth + 1;
	} while (numOfFactors != 500);
	return number;
};

console.log("===EXPECTED===","===ACTUAL===", );		
console.log(76576500,highlyDivisible(7));

//What is the smallest positive number that is evenly divisible by all of the numbers from range

const range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index);

const isDivisibleBy = (candidate, factor) => candidate % factor == 0;

const evenDividend = (number, factor) => {
    if (isDivisibleBy(number, factor))
        return number / factor;
	return number;
};

const smallestNumberDivisible = (lowerLimit, upperLimit) => {
	let numbers = range(lowerLimit,upperLimit);
	let factor = 2;
	let smallestNumber = 1;
	while (numbers.some(id => id != 1)) {
		if (numbers.some(id => isDivisibleBy(id, factor))) {
			numbers = numbers.map(num => evenDividend(num,factor));
			smallestNumber = smallestNumber * factor;
		}
		if (numbers.every(id => !isDivisibleBy(id, factor))) {
			factor = factor + 1;
		}
	}
	return smallestNumber;
};

module.exports = smallestNumberDivisible;
	

$194195Whale

$194195Whale
$194195Whale	

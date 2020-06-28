// SUM OF ALL THE MULITPLES OF 3 OR 5 BELOW 1000
// 3+5+6+9 = 23

const isDivisibleBy = (candidate, factors) =>
	factors.some((factor) => candidate % factor == 0);

const sumOfMultiplesOf3And5Below = (limit) => {
	let sum = 0;
	for (let number = 1; number < limit; number++) {
		if (isDivisibleBy(number, [3, 5])) {
			sum += number;
		}
	}
	return sum;
};

module.exports = sumOfMultiplesOf3And5Below;

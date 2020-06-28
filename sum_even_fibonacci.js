// SUM OF EVEN NUMBERS IN A FIBONACCI SEQUENCE WHERE IT STARTS WITH 1 AND 2

const last = array => array[array.length - 1];

const butlast = array => array[array.length - 2];

const nextFiboTerm = fibonacciSequence => {
	return [
		...fibonacciSequence,
		last(fibonacciSequence) + butlast(fibonacciSequence)
	];
};

const isEven = number => number % 2 == 0;

const evenFibonacci = fibonacciSequence => fibonacciSequence.filter(isEven);

const sumEvenFibonacciLessThan = limit => {
	let fibo = [1, 2];
	while (last(fibo) < limit) {
		fibo = nextFiboTerm(fibo);
	}
	return evenFibonacci(fibo).reduce((a, b) => a + b, 0);
};

module.exports = sumEvenFibonacciLessThan;

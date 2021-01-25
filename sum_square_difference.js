const range = number => Array(number)
	.fill()
    .map((_, id) => id + 1);
    
const addRange = array => array.reduce((number1, number2) => number1 + number2, 0);

const square = number => number * number;

const squareSum = number => addRange(range(number).map(square));

const sumSquare = number => square(addRange(range(number)));

const sumSquareDifference = number => sumSquare(number) - squareSum(number);

module.exports = sumSquareDifference


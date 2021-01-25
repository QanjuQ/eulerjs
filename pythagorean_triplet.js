const pythagoreanTriplet = (sum) => {
	for (let number1 = Math.floor(sum / 3); number1 < sum / 2; number1++) {
		for (let number2 = Math.floor(sum / 3); number2 < sum / 2; number2++) {
			let number3 = sum - (number1 + number2);
			if (Math.pow(number1, 2) + Math.pow(number3, 2) == Math.pow(number2, 2)) {
				return number1 * number2 * number3;
			}
		}
	}
};

module.exports = pythagoreanTriplet;

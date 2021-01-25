const largestProductSeries = (number,digitCount) => {
	let maxProduct = 0;
	let foo = "";
	for (let index = 0; index <= String(number).length - digitCount; index++) {
		let product = number
			.substring(index, index + digitCount)
			.split('')
			.map(num=>Number(num))
			.reduce((a, b) => (a * b), 1);
		if (product > maxProduct) {
			maxProduct = product;
		}
	}
	return maxProduct;
};

module.exports = largestProductSeries;

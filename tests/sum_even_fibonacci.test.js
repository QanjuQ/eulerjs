const assert = require("assert");
const sumEvenFibonacciLessThan = require("../sum_even_fibonacci.js");

describe("SUM of even fibonacci below 4000000", () => {
	it("Should return 4613732", () => {
		const expected = sumEvenFibonacciLessThan(4000000);
		assert.equal(expected, 4613732);
	});
});

const assert = require("assert");
const sumOfMultiples3And5 = require("../sum_multiples_3_and_5.js");

describe("SUM of Multiples of 3 and 5 below 1000", () => {
	it("Should return 233168", () => {
		const actual = sumOfMultiples3And5(1000);
		const expected = 233168;
		assert.equal(actual, expected);
	});

	it("Should return 23", () => {
		const actual = sumOfMultiples3And5(10);
		const expected = 23;
		assert.equal(actual, expected);
	});
});

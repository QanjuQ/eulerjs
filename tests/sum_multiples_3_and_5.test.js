const assert = require("assert");
const sumOfMultiples3And5 = require("../sum_multiples_3_and_5.js");

describe("SUM of Multiples of 3 and 5 below 1000", () => {
	it("Should return 233168", () => {
		const expected = sumOfMultiples3And5(1000);
		assert.equal(expected, 233168);
	});

	it("Should return 23", () => {
		const expected = sumOfMultiples3And5(10);
		assert.equal(expected, 23);
	});
});

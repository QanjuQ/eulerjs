const assert = require("assert");
const smallestNumberDivisible = require("../smallest_number_divisible.js");

describe("Smallest Number Divisble for the given range", () => {
	it("Should return 2520", () => {
		const actual = smallestNumberDivisible(1,10);
		const expected = 2520;
		assert.equal(actual, expected);
	});

	it("Should return 232792560", () => {
		const actual = smallestNumberDivisible(1, 20);
		const expected = 232792560;
		assert.equal(actual, expected);
	});
});

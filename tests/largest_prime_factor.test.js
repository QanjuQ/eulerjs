const assert = require("assert");
const largestPrimeFactor = require("../largest_prime_factor.js");

describe("Largest Prime Factor", () => {
	it("Should return 6857", () => {
		const actual = largestPrimeFactor(600851475143);
		const expected = 6857;
		assert.equal(actual, expected);
	});

	it("Should return 29", () => {
		const actual = largestPrimeFactor(13195);
		const expected = 29;
		assert.equal(actual, expected);
	});
});

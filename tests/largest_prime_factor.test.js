const assert = require("assert");
const largestPrimeFactor = require("../largest_prime_factor.js");

describe("Largest Prime Factor", () => {
	it("Should return 233168", () => {
		const expected = largestPrimeFactor(600851475143);
		assert.equal(expected, 6857);
	});

	it("Should return 29", () => {
		const expected = largestPrimeFactor(13195);
		assert.equal(expected, 29);
	});
});

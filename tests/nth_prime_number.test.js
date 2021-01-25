const assert = require("assert");
const nthPrimeNumber = require("../nth_prime_number.js");

describe("Nth Prime Number", () => {
	it("Should return 13 as 6th prime number", () => {
		const actual = nthPrimeNumber(6);
		const expected = 13;
		assert.equal(actual, expected);
	});

	it("Should return 104743 as 10001st prime number", () => {
		const actual = nthPrimeNumber(10001);
		const expected = 104743;
		assert.equal(actual, expected);
	});
});

const assert = require("assert");
const addPrimeNumbers = require("../prime_numbers_summation.js");

describe("Summation Of Prime Number", () => {
	it("Should return 17 for prime numbers below 10", () => {
		const actual = addPrimeNumbers(10);
		const expected = 17;
		assert.equal(actual, expected);
	});

	it("Should return 17 for prime numbers below 2000000", async done => {
		const actual = addPrimeNumbers(2000000);
		const expected = 142913828922;
        assert.equal(actual, expected);
        done();
	});
});

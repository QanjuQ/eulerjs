const assert = require("assert");
const sumSquareDifference = require("../sum_square_difference.js");

describe("Sum Square Difference", () => {
	it("Should return 2640", () => {
		const actual = sumSquareDifference(10);
		const expected = 2640;
		assert.equal(actual, expected);
	});

	it("Should return 25164150", () => {
		const actual = sumSquareDifference(100);
		const expected = 25164150;
		assert.equal(actual, expected);
	});
});

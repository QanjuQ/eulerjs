const assert = require("assert");
const largestPalindromeProduct = require("../largest_palindrome_product.js");

describe("Largest Palindrome Product", () => {
	it("Should return 906609", () => {
		const actual = largestPalindromeProduct(3);
		const expected = 906609;
		assert.equal(actual, expected);
	});

	it("Should return 9009", () => {
		const actual = largestPalindromeProduct(2);
		const expected = 9009;
		assert.equal(actual, expected);
	});
});

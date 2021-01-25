const assert = require("assert");
const pythogoreanTriplet = require("../pythagorean_triplet.js");

describe("Pythagorean triplet", () => {
	it("Should return 60 when given 12", () => {
		const actual = pythogoreanTriplet(12);
		const expected = 60;
		assert.equal(actual, expected);
	});

	it("Should return 31875000 when given 1000", () => {
		const actual = pythogoreanTriplet(1000);
		const expected = 31875000;
		assert.equal(actual, expected);
	});
});

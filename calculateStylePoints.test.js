const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	describe('different notes', () => {
		it('shows an average taken from an array consisting of integers', () => {
			const actual = calculateStylePoints([10, 12, 9, 15, 20]);
			const expected = 37;

			assert.equal(actual, expected);
		});
		it('shows an average taken from an array consisting of floating-point numbers', () => {
			const actual = calculateStylePoints([10.5, 15, 17.5, 18, 13.5]);
			const expected = 46;

			assert.equal(actual, expected);
		});
	});

	describe('repeated notes', () => {
		it('shows an average taken from an array consisting of integers', () => {
			const actual = calculateStylePoints([15, 16, 15, 18, 16]);
			const expected = 47;

			assert.equal(actual, expected);
		});

		it('shows an average taken from an array consisting of the same notes', () => {
			const actual = calculateStylePoints([18, 18, 18, 18, 18]);
			const expected = 54;

			assert.equal(actual, expected);
		});

		it('shows an average taken from an array consisting of floating-point numbers', () => {
			const actual = calculateStylePoints([13.5, 15.5, 13.5, 19, 15.5]);
			const expected = 44.5;

			assert.equal(actual, expected);
		});
	});
});
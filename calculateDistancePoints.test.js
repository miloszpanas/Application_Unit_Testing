const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('shows that the jump was longer than kPoint', () => {
            const actual = calculateDistancePoints(106.5, 'normal', 98);

            const expected = 77;

            assert.equal(actual, expected);
        });

        it('shows that the jump was shorter than kPoint', () => {
            const actual = calculateDistancePoints(80, 'normal', 98);

            const expected = 24;

            assert.equal(actual, expected);
        });

        it('shows that the jump was equal to kPoint', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('shows that the jump was longer than kPoint', () => {
            const actual = calculateDistancePoints(123, 'big', 120);

            const expected = 65.4;

            assert.equal(actual, expected);
        });
        it('shows that the jump was shorter than kPoint', () => {
            const actual = calculateDistancePoints(100, 'big', 120);

            const expected = 24;

            assert.equal(actual, expected);
        });
        it('shows that the jump was equal to kPoint', () => {
            const actual = calculateDistancePoints(120, 'big', 120);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('mammoth', () => {
        it('shows that the jump was longer than kPoint', () => {
            const actual = calculateDistancePoints(227, 'mammoth', 200);

            const expected = 152.4;

            assert.equal(actual, expected);
        });
        it('shows that the jump was shorter than kPoint', () => {
            const actual = calculateDistancePoints(150, 'mammoth', 200);

            const expected = 60;

            assert.equal(actual, expected);
        });
        it('shows that the jump was equal to kPoint', () => {
            const actual = calculateDistancePoints(200, 'mammoth', 200);

            const expected = 120;

            assert.equal(actual, expected);
        });
    });
    
})
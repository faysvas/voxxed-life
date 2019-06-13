const { generateBoard } = require('./game');
describe('game tests', () => {
    /**
     * Test generateBoard
     */
    test('[[0, 0], [0, 0]] generates [[0, 0], [0, 0]]', () => {
        expect(generateBoard([[0, 0], [0, 0]])).toEqual([[0, 0], [0, 0]]);
    });

    test('[[1, 0], [0, 0]] generates [[0, 0], [0, 0]]', () => {
        expect(generateBoard([[1, 0], [0, 0]])).toEqual([[0, 0], [0, 0]]);
    });

    test('[[1, 1], [1, 1]] generates [[1, 1], [1, 1]]', () => {
        expect(generateBoard([[1, 1], [1, 1]])).toEqual([[1, 1], [1, 1]]);
    });

    test('[[1, 1, 1], [1, 1, 0], [0, 0, 0]] generates [[1, 0, 1], [1, 0, 1], [0, 0, 0]]', () => {
        expect(generateBoard([[1, 1, 1], [1, 1, 0], [0, 0, 0]])).toEqual([
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ]);
    });

    test('[[1, 1, 1], [1, 1, 1], [1, 1, 1]] generates [[1, 0, 1], [0, 0, 0], [1, 0, 1]]', () => {
        expect(generateBoard([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ]);
    });
});

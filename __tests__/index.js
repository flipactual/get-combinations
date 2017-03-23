const getCombinations = require('../src');

describe('getCombinations', () => {
  it('gets combinations in one dimension with objects', () => {
    expect(getCombinations([
      {
        key: 'a',
        values: [
          { b: 1 }, { b: 2 }, { b: 3 },
          { b: 4 }, { b: 5 }, { b: 6 },
          { b: 7 }, { b: 8 }, { b: 9 },
        ],
      },
    ])).toEqual([
      { a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } },
      { a: { b: 4 } }, { a: { b: 5 } }, { a: { b: 6 } },
      { a: { b: 7 } }, { a: { b: 8 } }, { a: { b: 9 } },
    ]);
  });
  it('gets combinations in two dimension with numbers', () => {
    expect(getCombinations([
      {
        key: 'a',
        values: [
          1, 2, 3,
          4, 5, 6,
          7, 8, 9,
        ],
      },
      {
        key: 'b',
        values: [
          1, 2, 3,
          4, 5, 6,
          7, 8, 9,
        ],
      },
    ])).toEqual([
      { b: 1, a: 1 }, { b: 2, a: 1 }, { b: 3, a: 1 },
      { b: 4, a: 1 }, { b: 5, a: 1 }, { b: 6, a: 1 },
      { b: 7, a: 1 }, { b: 8, a: 1 }, { b: 9, a: 1 },
      { b: 1, a: 2 }, { b: 2, a: 2 }, { b: 3, a: 2 },
      { b: 4, a: 2 }, { b: 5, a: 2 }, { b: 6, a: 2 },
      { b: 7, a: 2 }, { b: 8, a: 2 }, { b: 9, a: 2 },
      { b: 1, a: 3 }, { b: 2, a: 3 }, { b: 3, a: 3 },
      { b: 4, a: 3 }, { b: 5, a: 3 }, { b: 6, a: 3 },
      { b: 7, a: 3 }, { b: 8, a: 3 }, { b: 9, a: 3 },
      { b: 1, a: 4 }, { b: 2, a: 4 }, { b: 3, a: 4 },
      { b: 4, a: 4 }, { b: 5, a: 4 }, { b: 6, a: 4 },
      { b: 7, a: 4 }, { b: 8, a: 4 }, { b: 9, a: 4 },
      { b: 1, a: 5 }, { b: 2, a: 5 }, { b: 3, a: 5 },
      { b: 4, a: 5 }, { b: 5, a: 5 }, { b: 6, a: 5 },
      { b: 7, a: 5 }, { b: 8, a: 5 }, { b: 9, a: 5 },
      { b: 1, a: 6 }, { b: 2, a: 6 }, { b: 3, a: 6 },
      { b: 4, a: 6 }, { b: 5, a: 6 }, { b: 6, a: 6 },
      { b: 7, a: 6 }, { b: 8, a: 6 }, { b: 9, a: 6 },
      { b: 1, a: 7 }, { b: 2, a: 7 }, { b: 3, a: 7 },
      { b: 4, a: 7 }, { b: 5, a: 7 }, { b: 6, a: 7 },
      { b: 7, a: 7 }, { b: 8, a: 7 }, { b: 9, a: 7 },
      { b: 1, a: 8 }, { b: 2, a: 8 }, { b: 3, a: 8 },
      { b: 4, a: 8 }, { b: 5, a: 8 }, { b: 6, a: 8 },
      { b: 7, a: 8 }, { b: 8, a: 8 }, { b: 9, a: 8 },
      { b: 1, a: 9 }, { b: 2, a: 9 }, { b: 3, a: 9 },
      { b: 4, a: 9 }, { b: 5, a: 9 }, { b: 6, a: 9 },
      { b: 7, a: 9 }, { b: 8, a: 9 }, { b: 9, a: 9 },
    ]);
  });
  it('gets combinations in three dimension with booleans', () => {
    expect(getCombinations([
      {
        key: 'a',
        values: [true, false],
      },
      {
        key: 'b',
        values: [true, false],
      },
      {
        key: 'c',
        values: [true, false],
      },
    ])).toEqual([
      { c: true, b: true, a: true },
      { c: false, b: true, a: true },
      { c: true, b: false, a: true },
      { c: false, b: false, a: true },
      { c: true, b: true, a: false },
      { c: false, b: true, a: false },
      { c: true, b: false, a: false },
      { c: false, b: false, a: false },
    ]);
  });
  it('gets combinations in four dimension with mixed fields', () => {
    expect(getCombinations([
      {
        key: 'a',
        values: [[1, 2, 3], [4, 5, 6]],
      },
      {
        key: 'b',
        values: ['a', 'b', 'c'],
      },
      {
        key: 'c',
        values: [true, false],
      },
      {
        key: 'd',
        values: [{ foo: true }, { bar: false }],
      },
    ])).toEqual([
      { d: { foo: true }, c: true, b: 'a', a: [1, 2, 3] },
      { d: { bar: false }, c: true, b: 'a', a: [1, 2, 3] },
      { d: { foo: true }, c: false, b: 'a', a: [1, 2, 3] },
      { d: { bar: false }, c: false, b: 'a', a: [1, 2, 3] },
      { d: { foo: true }, c: true, b: 'b', a: [1, 2, 3] },
      { d: { bar: false }, c: true, b: 'b', a: [1, 2, 3] },
      { d: { foo: true }, c: false, b: 'b', a: [1, 2, 3] },
      { d: { bar: false }, c: false, b: 'b', a: [1, 2, 3] },
      { d: { foo: true }, c: true, b: 'c', a: [1, 2, 3] },
      { d: { bar: false }, c: true, b: 'c', a: [1, 2, 3] },
      { d: { foo: true }, c: false, b: 'c', a: [1, 2, 3] },
      { d: { bar: false }, c: false, b: 'c', a: [1, 2, 3] },
      { d: { foo: true }, c: true, b: 'a', a: [4, 5, 6] },
      { d: { bar: false }, c: true, b: 'a', a: [4, 5, 6] },
      { d: { foo: true }, c: false, b: 'a', a: [4, 5, 6] },
      { d: { bar: false }, c: false, b: 'a', a: [4, 5, 6] },
      { d: { foo: true }, c: true, b: 'b', a: [4, 5, 6] },
      { d: { bar: false }, c: true, b: 'b', a: [4, 5, 6] },
      { d: { foo: true }, c: false, b: 'b', a: [4, 5, 6] },
      { d: { bar: false }, c: false, b: 'b', a: [4, 5, 6] },
      { d: { foo: true }, c: true, b: 'c', a: [4, 5, 6] },
      { d: { bar: false }, c: true, b: 'c', a: [4, 5, 6] },
      { d: { foo: true }, c: false, b: 'c', a: [4, 5, 6] },
      { d: { bar: false }, c: false, b: 'c', a: [4, 5, 6] },
    ]);
  });
});

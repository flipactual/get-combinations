// @flow

const flatten = require('lodash.flatten');

/**
 * Gets all intersections of provided fields
 *
 * @example
 * // returns [
 * //   { b: 1, a: 1 }, { b: 2, a: 1 }, { b: 3, a: 1 },
 * //   { b: 4, a: 1 }, { b: 5, a: 1 }, { b: 6, a: 1 },
 * //   { b: 7, a: 1 }, { b: 8, a: 1 }, { b: 9, a: 1 },
 * //   { b: 1, a: 2 }, { b: 2, a: 2 }, { b: 3, a: 2 },
 * //   { b: 4, a: 2 }, { b: 5, a: 2 }, { b: 6, a: 2 },
 * //   { b: 7, a: 2 }, { b: 8, a: 2 }, { b: 9, a: 2 },
 * //   { b: 1, a: 3 }, { b: 2, a: 3 }, { b: 3, a: 3 },
 * //   { b: 4, a: 3 }, { b: 5, a: 3 }, { b: 6, a: 3 },
 * //   { b: 7, a: 3 }, { b: 8, a: 3 }, { b: 9, a: 3 },
 * //   { b: 1, a: 4 }, { b: 2, a: 4 }, { b: 3, a: 4 },
 * //   { b: 4, a: 4 }, { b: 5, a: 4 }, { b: 6, a: 4 },
 * //   { b: 7, a: 4 }, { b: 8, a: 4 }, { b: 9, a: 4 },
 * //   { b: 1, a: 5 }, { b: 2, a: 5 }, { b: 3, a: 5 },
 * //   { b: 4, a: 5 }, { b: 5, a: 5 }, { b: 6, a: 5 },
 * //   { b: 7, a: 5 }, { b: 8, a: 5 }, { b: 9, a: 5 },
 * //   { b: 1, a: 6 }, { b: 2, a: 6 }, { b: 3, a: 6 },
 * //   { b: 4, a: 6 }, { b: 5, a: 6 }, { b: 6, a: 6 },
 * //   { b: 7, a: 6 }, { b: 8, a: 6 }, { b: 9, a: 6 },
 * //   { b: 1, a: 7 }, { b: 2, a: 7 }, { b: 3, a: 7 },
 * //   { b: 4, a: 7 }, { b: 5, a: 7 }, { b: 6, a: 7 },
 * //   { b: 7, a: 7 }, { b: 8, a: 7 }, { b: 9, a: 7 },
 * //   { b: 1, a: 8 }, { b: 2, a: 8 }, { b: 3, a: 8 },
 * //   { b: 4, a: 8 }, { b: 5, a: 8 }, { b: 6, a: 8 },
 * //   { b: 7, a: 8 }, { b: 8, a: 8 }, { b: 9, a: 8 },
 * //   { b: 1, a: 9 }, { b: 2, a: 9 }, { b: 3, a: 9 },
 * //   { b: 4, a: 9 }, { b: 5, a: 9 }, { b: 6, a: 9 },
 * //   { b: 7, a: 9 }, { b: 8, a: 9 }, { b: 9, a: 9 },
 * // ]
 * getCombinations([
 *   {
 *     key: 'a',
 *     values: [
 *       1, 2, 3,
 *       4, 5, 6,
 *       7, 8, 9,
 *     ],
 *   },
 *   {
 *     key: 'b',
 *     values: [
 *       1, 2, 3,
 *       4, 5, 6,
 *       7, 8, 9,
 *     ],
 *   },
 * ]);
 *
 * @param  {Object[]} fields          The fields to compose from
 * @param  {}         fields[].key    The key for the field
 * @param  {Array}    fields[].values The values for the field
 * @param  {Object[]} combinations    The previously composed combinations
 * @return {Object[]}                 The composed combinations
 */
function getCombinations(
  fields: { key: any, values: any[] }[],
  combinations: Object[] = []
): Object[] {
  if (!fields.length) {
    return combinations;
  }
  const [{ key, values }, ...remainingFields] = fields;
  if (combinations.length) {
    return getCombinations(remainingFields, flatten(
      combinations.map(combination => values.map(item => ({
        [key]: item,
        ...combination,
      }))))
    );
  }
  return getCombinations(remainingFields, values.map(item => ({
    [key]: item,
  })));
}

module.exports = getCombinations;

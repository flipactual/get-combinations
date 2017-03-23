# get-combinations

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/get-combinations.svg?style=flat-square)](https://travis-ci.org/flipactual/get-combinations/)
[![Node](https://img.shields.io/node/v/get-combinations.svg?style=flat-square)](http://npmjs.com/package/get-combinations)
[![NPM](https://img.shields.io/npm/v/get-combinations.svg?style=flat-square)](http://npmjs.com/package/get-combinations)

Gets all intersections of provided fields

<a name="getCombinations"></a>

## getCombinations(fields, combinations) ⇒ <code>Array.&lt;Object&gt;</code>
Gets all intersections of provided fields

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - The composed combinations  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array.&lt;Object&gt;</code> | The fields to compose from |
| fields[].key |  | The key for the field |
| fields[].values | <code>Array</code> | The values for the field |
| combinations | <code>Array.&lt;Object&gt;</code> | The previously composed combinations |

**Example**  
```js
// returns [
//   { b: 1, a: 1 }, { b: 2, a: 1 }, { b: 3, a: 1 },
//   { b: 4, a: 1 }, { b: 5, a: 1 }, { b: 6, a: 1 },
//   { b: 7, a: 1 }, { b: 8, a: 1 }, { b: 9, a: 1 },
//   { b: 1, a: 2 }, { b: 2, a: 2 }, { b: 3, a: 2 },
//   { b: 4, a: 2 }, { b: 5, a: 2 }, { b: 6, a: 2 },
//   { b: 7, a: 2 }, { b: 8, a: 2 }, { b: 9, a: 2 },
//   { b: 1, a: 3 }, { b: 2, a: 3 }, { b: 3, a: 3 },
//   { b: 4, a: 3 }, { b: 5, a: 3 }, { b: 6, a: 3 },
//   { b: 7, a: 3 }, { b: 8, a: 3 }, { b: 9, a: 3 },
//   { b: 1, a: 4 }, { b: 2, a: 4 }, { b: 3, a: 4 },
//   { b: 4, a: 4 }, { b: 5, a: 4 }, { b: 6, a: 4 },
//   { b: 7, a: 4 }, { b: 8, a: 4 }, { b: 9, a: 4 },
//   { b: 1, a: 5 }, { b: 2, a: 5 }, { b: 3, a: 5 },
//   { b: 4, a: 5 }, { b: 5, a: 5 }, { b: 6, a: 5 },
//   { b: 7, a: 5 }, { b: 8, a: 5 }, { b: 9, a: 5 },
//   { b: 1, a: 6 }, { b: 2, a: 6 }, { b: 3, a: 6 },
//   { b: 4, a: 6 }, { b: 5, a: 6 }, { b: 6, a: 6 },
//   { b: 7, a: 6 }, { b: 8, a: 6 }, { b: 9, a: 6 },
//   { b: 1, a: 7 }, { b: 2, a: 7 }, { b: 3, a: 7 },
//   { b: 4, a: 7 }, { b: 5, a: 7 }, { b: 6, a: 7 },
//   { b: 7, a: 7 }, { b: 8, a: 7 }, { b: 9, a: 7 },
//   { b: 1, a: 8 }, { b: 2, a: 8 }, { b: 3, a: 8 },
//   { b: 4, a: 8 }, { b: 5, a: 8 }, { b: 6, a: 8 },
//   { b: 7, a: 8 }, { b: 8, a: 8 }, { b: 9, a: 8 },
//   { b: 1, a: 9 }, { b: 2, a: 9 }, { b: 3, a: 9 },
//   { b: 4, a: 9 }, { b: 5, a: 9 }, { b: 6, a: 9 },
//   { b: 7, a: 9 }, { b: 8, a: 9 }, { b: 9, a: 9 },
// ]
getCombinations([
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
]);
```

## Scripts

### `test` – test

```sh
yarn run test
```

### `lint` – lint

```sh
yarn run lint
```

### `type` – type check

```sh
yarn run lint
```

### `readme` – generate the README

```sh
yarn run readme
```

### `compile` – compile

```sh
yarn run compile
```

## License

MIT @ [Flip](https://github.com/flipactual)

import { parseToNumberArray } from './parsers';

describe('parseToNumberArray', () => {
  describe.each`
    text                | expected
    ${null}             | ${[]}
    ${undefined}        | ${[]}
    ${''}               | ${[]}
    ${'1 2 3'}          | ${[1, 2, 3]}
    ${' \t 1 \n 2  3 '} | ${[1, 2, 3]}
    ${'-1 -2 -3'}       | ${[-1, -2, -3]}
    ${'1 a @'}          | ${[1, NaN, NaN]}
  `('text $text', ({ text, expected }) => {
    it(`returns ${expected}`, () => {
      expect(parseToNumberArray(text)).toEqual(expected);
    });
  });
});

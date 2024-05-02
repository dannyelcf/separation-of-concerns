import { containsOnlyNumbersAndSpaces } from './validators';

describe('containsOnlyNumbersAndSpaces', () => {
  describe.each`
    text                | expected
    ${null}             | ${false}
    ${undefined}        | ${false}
    ${''}               | ${true}
    ${'1 2 3'}          | ${true}
    ${' \t 1 \n 2  3 '} | ${true}
    ${'-1 -2 -3'}       | ${false}
    ${'1 a @'}          | ${false}
  `('text $text', ({ text, expected }) => {
    it(`returns ${expected}`, () => {
      expect(containsOnlyNumbersAndSpaces(text)).toEqual(expected);
    });
  });
});

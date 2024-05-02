import { fahrenheitToCelcius } from './convert-temperatures';

describe('fahrenheitToCelcius', () => {
  describe.each`
    fahrenheit | expected
    ${0}       | ${-17.77777777777778}
    ${32}      | ${0}
    ${64}      | ${17.77777777777778}
  `('$fahrenheit fahrenheit', ({ fahrenheit, expected }) => {
    it(`returns ${expected} celcius`, () => {
      expect(fahrenheitToCelcius(fahrenheit)).toEqual(expected);
    });
  });
});

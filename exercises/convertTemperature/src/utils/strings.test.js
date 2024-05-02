import { replacePlaceholders } from './strings';

describe('replacePlaceholders', () => {
  describe.each`
    text              | replacements       | expected
    ${null}           | ${[]}              | ${null}
    ${null}           | ${['text']}        | ${null}
    ${''}             | ${[]}              | ${''}
    ${''}             | ${['text']}        | ${''}
    ${'text'}         | ${['text']}        | ${'text'}
    ${'{0} text {0}'} | ${['zero']}        | ${'zero text zero'}
    ${'{0} text {1}'} | ${['zero', 'one']} | ${'zero text one'}
    ${'{0} text {1}'} | ${['zero', 'one']} | ${'zero text one'}
    ${'{0} text {1}'} | ${[]}              | ${'{0} text {1}'}
    ${'{0} text {1}'} | ${['zero']}        | ${'zero text {1}'}
  `(
    'text $text with replacements $replacements',
    ({ text, replacements, expected }) => {
      it(`returns ${expected}`, () => {
        expect(replacePlaceholders(text, ...replacements)).toBe(expected);
      });
    },
  );
});

import { generateList, displayResult, getUserInput } from './util.js'; // Import correct functions from util.js

describe('list: generates a list string from an array of strings', () => {
  describe('list: correctly lists items', () => {
    it('an empty array returns an empty string', () => {
      const expected = '';
      const actual = generateList([]); // Call generateList function
      expect(actual).toEqual(expected);
    });

    it('can list a single item', () => {
      const expected = '\n- hi';
      const actual = generateList(['hi'], '-'); // Call generateList function
      expect(actual).toEqual(expected);
    });

    it('can list many items', () => {
      const expected = '\n+ a\n+ b\n+ c\n+ d\n+ e';
      const actual = generateList(['a', 'b', 'c', 'd', 'e'], '+'); // Call generateList function
      expect(actual).toEqual(expected);
    });

    it('can use different bullet points', () => {
      const expected = '\n* a\n* b\n* c\n* d\n* e';
      const actual = generateList(['a', 'b', 'c', 'd', 'e'], '*'); // Call generateList function
      expect(actual).toEqual(expected);
    });
  });

describe('list: generates a list string from an array of strings', () => {
  describe('list: uses arguments correctly', () => {
    it('does not modify the array argument', () => {
      // Mock the prompt function
      global.prompt = jest.fn(() => null);

      const arg = ['a', 'b', 'c', 'd'];
      const result = getUserInput(arg);
      expect(arg).toEqual(['a', 'b', 'c', 'd']);
      
      // Remove the mock to avoid affecting other tests
      global.prompt.mockRestore();
    });
  });
});

  });

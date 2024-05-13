/**
 * @jest-environment jsdom
 */

import { classyHeader } from './classy-header.js';

describe('classyHeader: renders DOM headers of different levels and classes', () => {
  describe('an H3 with text: "hello", and no classes', () => {
    const actual = classyHeader(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual.tagName).toEqual('H3');
    });
    it('has innerHTML: "hello"', () => {
      expect(actual.innerHTML).toEqual('hello');
    });
    it('has classList length 0', () => {
      expect(actual.classList.length).toEqual(0);
    });
    it('has className: ""', () => {
      expect(actual.className).toEqual('');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('an H1 with text: "good bye", and two classes', () => {
    const actual = classyHeader(1, 'good bye', ['fancy', 'hover-right']);
    it('has tagName "H1"', () => {
      expect(actual.tagName).toEqual('H1');
    });
    it('has innerHTML: "good bye"', () => {
      expect(actual.innerHTML).toEqual('good bye');
    });
    it('has classList length 2', () => {
      expect(actual.classList.length).toEqual(2);
    });
    it('has class: "fancy"', () => {
      expect(actual.classList.contains('fancy')).toEqual(true);
    });
    it('has class: "hover-right"', () => {
      expect(actual.classList.contains('hover-right')).toEqual(true);
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => classyHeader(0, 'oops!');
      expect(shouldThrow).toThrow(RangeError);
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => classyHeader(7, 'oops!');
      expect(shouldThrow).toThrow(RangeError);
    });
  });
});


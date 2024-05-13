 /**
 * @jest-environment jsdom
 */

 import { linkedHeader } from './linked-header.js';

 describe('linkedHeader: renders an anchor inside a heading', () => {
   describe('a header linked to google', () => {
     const actual = linkedHeader('google it', 'https://www.google.com/');
 
     it('has tagName: "H2"', () => {
       expect(actual.tagName).toEqual('H2');
     });
     it('has childElementCount: 1', () => {
       expect(actual.childElementCount).toEqual(1);
     });
 
     describe(`first child`, () => {
       const actualChild = actual.children[0];
       it('has tagName: "A"', () => {
         expect(actualChild.tagName).toEqual('A');
       });
       it('has href: "https://www.google.com/"', () => {
         expect(actualChild.href).toEqual('https://www.google.com/');
       });
       it('has target: "_blank" (default)', () => {
         expect(actualChild.target).toEqual('_blank');
       });
       it('has innerHTML: "google it"', () => {
         expect(actualChild.innerHTML).toEqual('google it');
       });
       it('has childElementCount: 0', () => {
         expect(actualChild.childElementCount).toEqual(0);
       });
     });
   });
 
   describe('a header linked to badgers', () => {
     const actual = linkedHeader('badger x 3', 'https://badgerbadgerbadger.com/', '_self');
 
     it('has tagName: "H2"', () => {
       expect(actual.tagName).toEqual('H2');
     });
     it('has childElementCount: 1', () => {
       expect(actual.childElementCount).toEqual(1);
     });
 
     describe(`first child`, () => {
       const actualChild = actual.children[0];
       it('has tagName: "A"', () => {
         expect(actualChild.tagName).toEqual('A');
       });
       it('has href: "https://badgerbadgerbadger.com/"', () => {
         expect(actualChild.href).toEqual('https://badgerbadgerbadger.com/');
       });
       it('has target: "_self"', () => {
         expect(actualChild.target).toEqual('_self');
       });
       it('has innerHTML: "badger x 3"', () => {
         expect(actualChild.innerHTML).toEqual('badger x 3');
       });
       it('has childElementCount: 0', () => {
         expect(actualChild.childElementCount).toEqual(0);
       });
     });
   });
 });
 

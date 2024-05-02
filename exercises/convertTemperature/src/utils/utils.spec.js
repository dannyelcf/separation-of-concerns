import { convertedTemperature } from './utils.js';

describe('convertedTemperature: fahrenheit converts into celsius', () => {
  it('should handle input with only spaces', () => {
    const returned = convertedTemperature('32');
    expect(returned).toEqual(' 0.00');
  });

  it('should handle input with only spaces', () => {
    const returned = convertedTemperature('32 64 128');
    expect(returned).toEqual(' 0.00 17.78 53.33');
  });
});

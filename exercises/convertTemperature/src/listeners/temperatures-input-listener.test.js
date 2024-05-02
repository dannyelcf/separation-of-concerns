/**
 * @jest-environment jsdom
 */

import { ON_CHANGE, TEMPERATURES_INPUT } from '../data/constants';
import { addTemperaturesChangeListener } from './temperatures-input-listener';

describe('addTemperatureChangeListener', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input id="${TEMPERATURES_INPUT}" />
      </div>
    `;
  });

  it('should add a handler to the temperature change', () => {
    // GIVEN
    const handler = jest.fn();
    const dispatchChangeTemperatures = () => {
      document
        .getElementById(TEMPERATURES_INPUT)
        .dispatchEvent(new window.Event(ON_CHANGE));
    };
    // WHEN
    addTemperaturesChangeListener(handler);
    dispatchChangeTemperatures();
    // THEN
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

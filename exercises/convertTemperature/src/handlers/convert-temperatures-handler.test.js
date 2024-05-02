/**
 * @jest-environment jsdom
 */

import {
  CONVERT_TEMPERATURE_CONTAINER,
  TEMPERATURES_INPUT,
} from '../data/constants';
import { convertTemperaturesHandler } from './convert-temperatures-handler';

describe('convertTemperaturesHandler', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input id="${TEMPERATURES_INPUT}" />
        <div id="${CONVERT_TEMPERATURE_CONTAINER}"></div>
      </div>
    `;
  });

  it('should convert the input temperatures', () => {
    // GIVEN
    const event = { target: { value: '0 32 64' } };
    // WHEN
    convertTemperaturesHandler(event);
    // THEN
    const innerHTML = document.getElementById(
      CONVERT_TEMPERATURE_CONTAINER,
    ).innerHTML;
    expect(innerHTML).toContain('>-17.78<');
    expect(innerHTML).toContain('>0.00<');
    expect(innerHTML).toContain('>17.78<');
  });
});

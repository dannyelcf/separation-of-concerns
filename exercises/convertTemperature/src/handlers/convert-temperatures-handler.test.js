/**
 * @jest-environment jsdom
 */

import {
  CONVERT_TEMPERATURE_CONTAINER,
  MESSAGE_ERROR_NOT_INTEGER,
  TEMPERATURES_INPUT,
} from '../data/constants';
import { replacePlaceholders } from '../utils/strings';
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

  it('should show an alert when invalid input', () => {
    // GIVEN
    const input = '0 invalid 64';
    const event = { target: { value: input } };
    window.alert = jest.fn();
    // WHEN
    convertTemperaturesHandler(event);
    // THEN
    expect(window.alert).toHaveBeenCalledWith(
      replacePlaceholders(MESSAGE_ERROR_NOT_INTEGER, input),
    );
  });
});

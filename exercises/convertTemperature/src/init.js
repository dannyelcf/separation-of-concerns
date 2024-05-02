import { convertTemperaturesHandler } from './handlers/convert-temperatures-handler.js';
import { addTemperaturesChangeListener } from './listeners/temperatures-input-listener.js';

addTemperaturesChangeListener(convertTemperaturesHandler);

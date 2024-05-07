import { castTheValue } from './handler.js';
import { TYPE_USER_ACTION , TYPE_CASTED_VALUE } from "../data/constants.js";
export const listeners = () =>
{document.getElementById(TYPE_USER_ACTION ).addEventListener('click', castTheValue)};
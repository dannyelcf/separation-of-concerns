import { CAP_SWAP_BUTTON } from '../data/constants.js';
import { capSwapHandler } from './handler.js';

document.getElementById(CAP_SWAP_BUTTON).addEventListener('click', capSwapHandler);

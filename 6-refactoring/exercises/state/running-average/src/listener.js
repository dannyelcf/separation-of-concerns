import { runningAverageHandler } from './handler.js';

const listener = () => {
    document.getElementById('add-to-average').addEventListener('click', runningAverageHandler);
}

export default listener;
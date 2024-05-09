/**
 * render a drop-down info element
 *
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @param {string} [captionColor ='black'] - the color of the caption
 * @param {string} [mainTextColor='black'] - the color of the main text
 * @returns {HTMLDetailsElement}
 */
export const info = (
  caption,
  mainText,
  id = 'details',
  captionColor = 'black',
  mainTextColor = 'black',
) => {
  const detailsEl = document.createElement('details');
  detailsEl.id = id;

  const summaryEl = document.createElement('summary');
  summaryEl.textContent = summary;
  summaryEl.style.color = captionColor;

  const pEl = document.createElement('p');
  pEl.textContent = mainText;
  pEl.style.color = mainTextColor;

  detailsEl.appendChild(summaryEl);
  detailsEl.appendChild(pEl);

  return detailsEl;
};

/**
 * render a drop-down info element
 *
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @returns {HTMLDetailsElement}
 */
export const info = (caption, mainText, id = captionColor = 'default', mainTextColor = 'default') => {
  
  const detailsEl = document.createElement('details');
  detailsEl.id = id; 
  console.log (detailsEl);

  const summaryEl = document.createElement('summery');
  summaryEl.textContentCaption = caption;
  summaryEl.style.color = captionColor;

  const pEl = document.createElement('p');
  pEl.textContent = mainText ;
  pEl.style.color = mainTextColor;

  detailsEl.appendChild(summaryEl);
  detailsEl.appendChild(pEl);

  return detailsEl;
};

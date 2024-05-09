/**
 *
 */
export const saveNoCopies = () => {
  const alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
    data.noCopies.push(userInput);
  }

  // communicate result to user
  const message = data.noCopies.join(', ');
  alert(message);
};

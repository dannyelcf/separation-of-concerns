

const data = {
    noCopies: [],
  };

export const saveNoCopies = (userInput) => {
  
  // execute core logic
  const alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
    data.noCopies.push(userInput);
  }

  // communicate result to user
  return data.noCopies;//.join(', ');
};

export default saveNoCopies;

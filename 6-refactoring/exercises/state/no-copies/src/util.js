
  
  export const saveNoCopies = (userInput) => {
    const alreadySaved = data.noCopies.includes(userInput);
    if (!alreadySaved) {
      data.noCopies.push(userInput);
    }
    // Communicate result to user
    const message = data.noCopies.join(', ');
    return data.noCopies;
  };
  
  export default saveNoCopies;
  
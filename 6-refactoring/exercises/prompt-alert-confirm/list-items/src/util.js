/**
 *
 */
export const list = (allInputs) => {
    let stringList = '';
  for (const input of allInputs) {
    stringList += `\n- ${input}`;
  }
  return stringList;
};

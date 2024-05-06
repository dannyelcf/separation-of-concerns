/**
 *
 */
export const list = ( allInputs, bulletPoint ) => {
        let stringList = '';
        for (const input of allInputs) {
          stringList += `\n${bulletPoint} ${input}`;
        }
        return stringList;
};

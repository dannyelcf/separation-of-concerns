/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
    console.log(arrayOfArrays)
    const table = document.createElement('table');

    for (const array of arrayOfArrays){
      console.log(array);
      const tr = document.createElement('tr');
        for (const element of array){
            console.log(element);
            const td = document.createElement('td');
            td.innerText = element ;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
};

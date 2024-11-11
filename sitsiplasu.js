function increase(){
  value = document.getElementById("quantity").value;
  if (value <= 3){
    document.getElementById("quantity").value++;
  }
}
function decrease(){
  value = document.getElementById("quantity").value;
  if (value >= 1){
    document.getElementById("quantity").value--;
  }
}
function printToExcel(filename = 'test.xlsx') {
  // Get the tables by their IDs
  let table1 = document.getElementById('container-table');
  let table2 = document.getElementById('container-table-with-foods');

  // Create a new workbook
  let workbook = XLSX.utils.book_new();

  // Convert the tables to worksheets and append them to the workbook
  if (table1) {
    let worksheet1 = XLSX.utils.table_to_sheet(table1);
    XLSX.utils.book_append_sheet(workbook, worksheet1, "Sheet1");
  }

  if (table2) {
    let worksheet2 = XLSX.utils.table_to_sheet(table2);
    XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");
  }

  // Write the workbook to an Excel file
  XLSX.writeFile(workbook, filename);
}




function submit(){
  let people = [];
  let all = [];
  let tables = document.getElementById("quantity").value;
  const data = document.getElementById("participants").value
  const input = data.split(/\n/);

  const fooddata = document.getElementById("food-things").value
  const foodinput = fooddata.split(/\n/);

  for (let i = 0; i < input.length; i++) {
    people.push(input[i]);
  }

  for (let y = 0; y < people.length; y++) {
    all[y] = [input[y], foodinput[y]];
  }
  
  console.log(all);

  let perTable = (input.length / 2) / tables;

  shuffledpeople = shuffleArray(all);

  window.globalVariable = shuffledpeople;

  createTable(perTable, shuffledpeople);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createTable(perTable, people){
  let tableAmount = document.getElementById('quantity').value;
  let container = document.getElementById('container-table');
  let tableHTML = '';
  container.innerHTML = tableHTML;
  let z = 0;
  
    // tulostaa rivit laskemalla ihmiset per pöytä
    // tulostaa loput ihmiset jos epätasainen määrä
    for (let index = 0; index < perTable; index++) {

      tableHTML += `
        <tr class="row">
          <td class="empty"></td>
      `;

      // tulostaa jokaisen pöydän rivi kerrallaan
      for (let i = 0; i < tableAmount; i++) {
        if (people[z]) {
          tableHTML += `<td class="cell" id="${z}">${people[z][0]}</td>`
        }
        else{
          tableHTML += `<td class="cell"></td>`
        }
        if (people[z+1]) {
          tableHTML += `<td class="cell" id="${z+1}">${people[z+1][0]}</td>`
        }
        else{
          tableHTML += `<td class="cell""></td>`
        }

        tableHTML += `<td class="empty"></td>`;

        z = z + 2;
      }
      
    }

    tableHTML += `</tr>`;

  if (container) {
    container.innerHTML = tableHTML;
  }
  createTableWithFood(perTable, people);
}

function createTableWithFood(perTable, people){
  let tableAmount = document.getElementById('quantity').value;
  let container = document.getElementById('container-table-with-foods');
  let tableHTML = '';
  let z = 0;
  
    // tulostaa rivit laskemalla ihmiset per pöytä
    // tulostaa loput ihmiset jos epätasainen määrä
    for (let index = 0; index < perTable; index++) {

      tableHTML += `
        <tr class="row">
          <td class="empty" id="0"></td>
      `;

      // tulostaa jokaisen pöydän rivi kerrallaan
      for (let i = 0; i < tableAmount; i++) {
        if (people[z]) {
          tableHTML += `<td class="cell" id="${i}" draggable="true">${people[z][0]}, ${people[z][1]}</td>`
        }
        else{
          tableHTML += `<td class="cell" id="${i}" draggable="true"></td>`
        }
        if (people[z+1]) {
          tableHTML += `<td class="cell" id="${i}" draggable="true">${people[z+1][0]}, ${people[z][1]}</td>`
        }
        else{
          tableHTML += `<td class="cell" id="${i}" draggable="true"></td>`
        }

        tableHTML += `<td class="empty" id="${i}"></td>`;

        z = z + 2;
      }
      
    }
    tableHTML += `</tr>`;

  if (container) {
    container.innerHTML = tableHTML;
  }
  
}

function swapCells(cell1, cell2) {
  if (cell1 && cell2 && cell1.tagName === 'TD' && cell2.tagName === 'TD') {
    // Cloning each of the cells to swap them entirely
    let cell1Clone = cell1.cloneNode(true);
    let cell2Clone = cell2.cloneNode(true);
    
    // Removing the "selected" class and any inline background styling from clones
    cell1Clone.classList.remove('selected');
    cell1Clone.style.backgroundColor = '';
    cell2Clone.classList.remove('selected');
    cell2Clone.style.backgroundColor = '';

    // Replacing cell1 with cell2Clone and cell2 with cell1Clone
    cell1.parentNode.replaceChild(cell2Clone, cell1);
    cell2.parentNode.replaceChild(cell1Clone, cell2);
  } else {
    console.error('Invalid cell references. Please provide valid <td> elements.');
  }
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  // Adding event listeners to all table cells
  const table = document.querySelector('#container-table');
  let firstSelectedCell = null;
  
  table.addEventListener('click', (event) => {
    const clickedCell = event.target;
    if (clickedCell.tagName === 'TD') {
      if (!firstSelectedCell) {
        // Select the first cell
        firstSelectedCell = clickedCell;
        clickedCell.classList.add('selected');
        clickedCell.style.backgroundColor = 'lightgray';
      } else if (firstSelectedCell === clickedCell) {
        // Deselect if the same cell is clicked again
        firstSelectedCell.classList.remove('selected');
        firstSelectedCell.style.backgroundColor = '';
        firstSelectedCell = null;
      } else {
        // Swap with the second cell
        swapCells(firstSelectedCell, clickedCell);
        firstSelectedCell.classList.remove('selected');
        firstSelectedCell.style.backgroundColor = '';
        firstSelectedCell = null;
      }
    }
  });
});



function showFoods(){
  let table = document.getElementById('container-table');
  let indexes = [];

  for (let row of table.rows) {
    // Loop through each cell (td) in the current row
    for (let cell of row.cells) {
        // Check if the cell has a non-empty value
        if (cell.textContent.trim() !== "") {
            indexes.push(parseInt(cell.id));
        }
    }
  }

  changeTableWithFood(indexes);

}

function changeTableWithFood(indexes){
  let tableHTML = '';
  let tableAmount = document.getElementById('quantity').value;
  document.getElementById("container-table-with-foods").innerHTML = "";
  let container = document.getElementById("container-table-with-foods");
  container.innerHTML = tableHTML;
  x = 0;

  let tables = document.getElementById("quantity").value;
  const data = document.getElementById("participants").value
  const input = data.split(/\n/);
  let perTable = (input.length / 2) / tables;

  perTable = Math.ceil(perTable);



  for (let i = 0; i < input.length / tables; i++) {
    tableHTML += `
    <tr class="row">
      <td class="empty"></td>
    `;

    for (let y = 0; y < tableAmount; y++) {

      if (i % 2 == 0) {
        if (shuffledpeople[x]) {
          
          tableHTML += `<td class="cell" id="${x}"draggable="true">${shuffledpeople[indexes[x]][0]}, ${shuffledpeople[indexes[x]][1]}</td>`
        }
        else{
          
          tableHTML += `<td class="cell" id="${x}" draggable="true"></td>`
        }
        if (shuffledpeople[x+1]) {
          tableHTML += `<td class="cell" id="${x+1}" draggable="true">${shuffledpeople[indexes[x+1]][0]}, ${shuffledpeople[indexes[x+1]][1]}</td>`
        }
        else{
          tableHTML += `<td class="cell" id="${x}" draggable="true"></td>`
        }
        tableHTML += `<td class="empty"></td>`;

        x = x +2;
      }
      
    }
    
      tableHTML += `</tr>`;

    }









  if (container) {
    container.innerHTML = tableHTML;
  }

  
}
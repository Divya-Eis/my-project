let grid = [];       
let numOfCells = 64; 
let counter = 0;    
let row;             

for (let i = 0; i <= numOfCells; i++) { 
  if (counter % 8 === 0) {              
    if (row !== undefined) {             
      grid.push(row);
    }
    row = [];                     
  }

  row.push(counter);                     
  counter++;                             

  if (counter === numOfCells) {          
    grid.push(row);
  }
}


console.table(grid);

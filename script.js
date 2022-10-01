// Create 256 Divs 

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-style');
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
}


// Create Hover Effect Style


// New Grid

const newGridBttn = document.querySelector('.bttn');

newGridBttn.addEventListener('click', () => {
    let newGrid = prompt("Please enter how many squares you would like per side (Max 100)");
   const previousGrid = document.querySelectorAll('.square-style');
   for (let i = 0; i < previousGrid.length; i++) {
    gridContainer.removeChild(previousGrid[i]);
   } 

   let sizecalculation = (600 / newGrid) -1;

   console.log(sizecalculation);

    for (let i = 0; i < (newGrid * newGrid); i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('new-square-style')
    squareDiv.style.height = `${sizecalculation}px`;
    squareDiv.style.width = `${sizecalculation}px`;
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
   }

});





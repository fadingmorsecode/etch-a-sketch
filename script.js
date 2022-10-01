// Create 256 Divs 

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-style');
    squareDiv.classList.add('deletion');
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
}





// New Grid

const newGridBttn = document.querySelector('.bttn');

newGridBttn.addEventListener('click', () => {
    let newGrid = prompt("Please enter how many squares you would like per side (Max 100)", "0");
    
    let convertedNewGrid = Number(newGrid);

    if (typeof(convertedNewGrid) !== 'number' || isNaN(convertedNewGrid) === true) {
        alert('Please enter a number');
    } else if (convertedNewGrid === 0) {
        // do nothing for null
    } else if (convertedNewGrid < 1 || newGrid > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        const previousGrid = document.querySelectorAll('.deletion');
    for (let i = 0; i < previousGrid.length; i++) {
    gridContainer.removeChild(previousGrid[i]);
   } 

   let sizecalculation = (600 / convertedNewGrid);

    for (let i = 0; i < (convertedNewGrid * convertedNewGrid); i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('new-square-style')
    squareDiv.classList.add('deletion');
    squareDiv.style.height = `${sizecalculation}px`;
    squareDiv.style.width = `${sizecalculation}px`;
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
   }
    }

});




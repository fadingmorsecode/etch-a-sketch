// Create 256 Divs 

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-style');
    squareDiv.classList.add('deletion');
    squareDiv.classList.add('rainbow');
    squareDiv.classList.add('erase');
    squareDiv.classList.add('black');
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
}





// New Grid

const newGridBttn = document.querySelector('.newbttn');

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
    squareDiv.classList.add('new-square-style');
    squareDiv.classList.add('deletion');
    squareDiv.classList.add('rainbow');
    squareDiv.classList.add('erase');
    squareDiv.classList.add('black');
    squareDiv.style.height = `${sizecalculation}px`;
    squareDiv.style.width = `${sizecalculation}px`;
    gridContainer.appendChild(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('square-hover');
    });
   }
  }

});

// Rainbow Effect

const rainbowMode = document.querySelector('.rainbowbttn');

rainbowMode.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.rainbow');
        for (let i = 0; i < gridSquares.length; i++) {
            const squareDiv = gridSquares[i];
            squareDiv.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            console.log(r);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            squareDiv.style.background = "rgb(" + r + "," + g + "," + b + ")"; 
            });
        }
});

// Eraser Button

const eraserMode = document.querySelector('.erasebttn');

eraserMode.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.erase');
        for (let i = 0; i < gridSquares.length; i++) {
            const squareDiv = gridSquares[i];
            squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.background = "#FAF9F6"; 
            });
        }
});

// Black Button

const blackMode = document.querySelector('.blackbttn');

blackMode.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.black');
        for (let i = 0; i < gridSquares.length; i++) {
            const squareDiv = gridSquares[i];
            squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.background = "#000000"; 
            });
        }
});







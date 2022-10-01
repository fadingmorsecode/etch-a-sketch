const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-style')
    gridContainer.appendChild(squareDiv);
    console.log(i);
}


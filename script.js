// Create 256 Divs 

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-style')
    gridContainer.appendChild(squareDiv);
}


// Create Hover Effect Style

const hoverEffect = document.querySelectorAll('.square-style');

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        hoverEffect[i].classList.add('square-hover');
        console.log('yes?')
    });
}

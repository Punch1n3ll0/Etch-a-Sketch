// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary DOM elements
    const viewport = document.querySelector('.viewport');
    const buttonDimensions = document.querySelector('.dimensions');
    const buttonRandom = document.querySelector('.random');
    const buttonRed = document.querySelector('.red');
    const buttonGreen = document.querySelector('.green');
    const buttonBlue = document.querySelector('.blue');
    const buttonShake = document.querySelector('.shake');
    const colorPicker = document.querySelector('#colorPicker');

    // Initialize default values
    let gridSize = 16; // Default grid size
    let isRandomMode = false;
    let currentColor = '#333'; // Default color (gray)

    // Function to create the grid
    function createGrid(size) {
        viewport.innerHTML = ''; // Clear the viewport
        const totalSquares = size * size;
        
        // Set the flex basis for the squares
        const squareSize = `calc(100% / ${size})`;
        
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.flexBasis = squareSize;
            square.dataset.darkness = '0'; // Initialize darkness level
            viewport.appendChild(square);
        }
    }

    // Create initial grid
    createGrid(gridSize);

    // Event listener for changing grid size
    buttonDimensions.addEventListener('click', () => {
        let newSize = parseInt(prompt('Enter the number of squares per side (1-100):'), 10);
        if (newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    // Event listener for random color mode
    buttonRandom.addEventListener('click', () => {
        isRandomMode = !isRandomMode;
        currentColor = isRandomMode ? 'random' : '#333';
        buttonRandom.textContent = isRandomMode ? 'Gray' : 'Random';
    });

    // Event listeners for color buttons
    buttonRed.addEventListener('click', () => {
        currentColor = 'red';
        isRandomMode = false;
        buttonRandom.textContent = 'Random';
    });
    buttonGreen.addEventListener('click', () => {
        currentColor = 'green';
        isRandomMode = false;
        buttonRandom.textContent = 'Random';
    });
    buttonBlue.addEventListener('click', () => {
        currentColor = 'blue';
        isRandomMode = false;
        buttonRandom.textContent = 'Random';
    });

    // Event listener for custom color picker
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        isRandomMode = false;
        buttonRandom.textContent = 'Random';
    });

    // Function to get random color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Event listener for hover effects
    viewport.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('square')) {
            let darkness = parseInt(e.target.dataset.darkness) || 0;
            darkness = Math.min(darkness + 20, 100); // Increase darkness by 20%, max 100%
            
            let color = isRandomMode ? getRandomColor() : currentColor;
            
            e.target.style.backgroundColor = color;
            e.target.style.opacity = darkness / 100;
            e.target.dataset.darkness = darkness;
        }
    });

    // Event listener for shake button
    buttonShake.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(square => {
            square.style.backgroundColor = 'white';
            square.style.opacity = '1';
            square.dataset.darkness = '0';
        });
    });
});
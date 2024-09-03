# Etch-a-Sketch

## Description

Etch-a-Sketch is a browser-based drawing application inspired by the classic mechanical drawing toy. This interactive web app allows users to create colorful drawings by hovering their mouse over a grid of squares.

## Features

- Adjustable grid size (1-100 squares per side)
- Multiple color options:
  - Red, Green, Blue
  - Random color mode
  - Custom color picker
- Progressive shading effect
- "Shake" feature to clear the drawing

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## How to Use

1. Open the `index.html` file in a web browser.
2. Hover your mouse over the grid to start drawing.
3. Use the color buttons to change the drawing color.
4. Click "Select Dimensions" to change the grid size.
5. Click "Shake" to clear the drawing.

## Code Structure

- `index.html`: The main HTML structure of the app.
- `styles.css`: Contains all the styling for the app.
- `script.js`: Handles the interactive functionality of the app.

## Key JavaScript Functions

- `createGrid(size)`: Generates the drawing grid.
- `getRandomColor()`: Returns a random RGB color.
- Event listeners for:
  - Color selection
  - Grid size adjustment
  - Drawing (mouseover events)
  - Clearing the grid

## Customization

You can easily customize the app by modifying the CSS variables or adding new color options in the JavaScript file.

## Future Improvements

- Add touch support for mobile devices
- Implement save and load functionality
- Add more drawing tools (e.g., eraser, fill bucket)

## Credits

This project was inspired by The Odin Project's curriculum.


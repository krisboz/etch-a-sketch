//Drawing the grid
const container = document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");


function makeRows(rowNum) {
    for (let index = 0; index < rowNum; index++) {
        let row = document.createElement("div")
        container.appendChild(row).className = "gridRow"
        
    }

}


function makeColumns(colNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < colNum; j++) {
            let cell = document.createElement("div")
            rows[j].appendChild(cell).className = "cell"
            
        }
    }
}


function makeGrid(rows, cols) {
    makeRows(rows)
    makeColumns(cols)
}

makeGrid(16, 16)

const fillSquare = (event) => {
    event.target.classList.add("clicked")
}

const deleteGrid = () => {
    const container = document.querySelector(".container")
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

const testFunc = () => {
    deleteGrid();
    let value = prompt("How big you wanna")
    makeGrid(value, value);
    const cells = document.querySelectorAll(".cell")

    cells.forEach(cell => cell.addEventListener("mouseenter", fillSquare), {once: true})

}

//. The clear button function iterates through each grid box and 
//reset the background color value to null. The reset button
// function prompts the user to enter a number. If the number is 
//valid and below 100, it will remove the old grid boxes and add
// news ones based on the new number using the createGrid function.
// Otherwise, it will re-prompt the user to enter a number if its
// over 100 or do nothing.

//Adding event listeners
const cells = document.querySelectorAll(".cell")
cells.forEach(cell => cell.addEventListener("mouseenter", fillSquare), {once: true})

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", testFunc)
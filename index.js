
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
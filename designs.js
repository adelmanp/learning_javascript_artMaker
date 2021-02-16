// Select size input
const tableSizeForm = document.querySelector('form')

// When size is submitted by the user, call makeGrid()
tableSizeForm.addEventListener('submit', event => {
    event.preventDefault()
    var tableHeight = document.getElementById('inputHeight').value;
    var tableWidth = document.getElementById('inputWidth').value;
    makeGrid(tableHeight, tableWidth)
    }
)

//function makeGrid() {
function makeGrid(height, width){
    let tableRef = document.getElementById("pixelCanvas");
    tableRef.innerHTML = null;
    //Create grid using for loop
    for (rowNumber = 0; rowNumber < height; rowNumber++){
        let newRow = tableRef.insertRow(rowNumber);
        for (cellNumber = 0; cellNumber < width; cellNumber++){
            let newCell = newRow.insertCell(cellNumber);
            //Give each cell a unique ID and listener to change color
            newCell.id = "row_" + rowNumber + "cell_" + cellNumber;
            newCell.addEventListener('click', function(event) {
                var color = colorPicker.value;
                newCell.style.backgroundColor = color;
                }
            )
        }
    }
};

let rowCount = 90
let colCount = 90
let mousedown = false

createGrid()

function createGrid(){
    let sketcharea = document.querySelector('#sketcharea')
    sketcharea.style.alignItems="stretch"
    for (let row = 0; row <rowCount; row++)
    {
        let newRow = document.createElement('div')
        newRow.style.display = "flex"
        newRow.style.justifyContent = "center"
        newRow.style.alignItems = "stretch"
        newRow.style.flex = "auto"
        newRow.style.flexDirection = "column"
        newRow.style.borderRa
        newRow.className = "column"
        newRow.id = "column-" + row
        for(let column = 0; column < colCount; column++ )
        {
            let newCol = document.createElement("div")
            newCol.style.flex = "auto"
            newCol.style.backgroundColor = "lightgray"
            newCol.className = "cell"
            newCol.id = "cell-" + row + "-" + column 
            newCol.addEventListener('mousedown', function(event){
                mousedown = true
                sketch(event)
            })
            newCol.addEventListener('mouseup', ()=>{mousedown = false})
            newCol.addEventListener('mouseover', function(event){
                if(mousedown){
                    sketch(event)
                }
            })
            newCol.addEventListener('dragover', function(event){
                if(mousedown){
                    sketch(event)
                }
            })
            newCol.addEventListener('dragend', ()=>{mousedown = false})
            newRow.appendChild(newCol)
        }
        sketcharea.appendChild(newRow)
    }
    let topleft = document.querySelector("#cell-0-0")
    topleft.style.borderTopLeftRadius = "30px";

    let topright = document.querySelector("#cell-" + (rowCount - 1) + "-0")
    topright.style.borderTopRightRadius = "30px";

    let bottomleft = document.querySelector("#cell-0-" + (colCount - 1))
    bottomleft.style.borderBottomLeftRadius = "30px";

    let bottomright = document.querySelector("#cell-" + (rowCount - 1) + "-" + (colCount - 1))
    bottomright.style.borderBottomRightRadius = "30px";

    sketcharea.style.borderRadius = "30px"
}

function sketch(event){
    event.target.style.backgroundColor = "black"
}

function resizeGrid(){
    let sketcharea = document.querySelector("#sketcharea")
    let sketchChildren = document.querySelectorAll('#sketcharea > *')
    for (child of sketchChildren){
        sketcharea.removeChild(child)
    }
    createGrid()
}

function changeGridSize(){
    let squareCount = prompt("Enter number of squares per side")
    if(!isNaN(squareCount)){
        if(squareCount < 1){
            squareCount = 1;
        }
        if(squareCount > 100){
            squareCount = 100;
        }
        rowCount = squareCount
        colCount = squareCount
        
        resizeGrid()
    }
}

function resetSketchArea(){
    let cells = document.querySelectorAll(".cell")
    for (let cell of cells){
        cell.style.backgroundColor = "lightgray"
    }
}
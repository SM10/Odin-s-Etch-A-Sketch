let rowCount = 108
let colCount = 108
let mousedown = false

createGrid()

function createGrid(){
    let sketcharea = document.querySelector('#sketcharea')
    for (let row = 0; row <rowCount; row++)
    {
        let newRow = document.createElement('div')
        newRow.style.display = "flex"
        newRow.style.justifyContent = "center"
        newRow.style.alignItems = "stretch"
        newRow.style.flex = "auto"
        newRow.style.flexDirection = "row"
        newRow.className = "row"
        newRow.id = "row-" + row
        for(let column = 0; column < colCount; column++ )
        {
            let newCol = document.createElement("div")
            newCol.style.flex = "auto"
            newCol.className = "column"
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
}

function sketch(event){
    event.target.style.backgroundColor = "black"
}
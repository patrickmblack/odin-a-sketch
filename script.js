

main()


function main(){

    generateSquares(32)
    // fillSquare()

    const resetButton = document.querySelector('#reset-btn')

    resetButton.addEventListener('click', () => {
        resetGrid()
    })
}

function generateSquares(sideLength){
    const gridContainer = document.querySelector('#grid-container')
    gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`

    for (let i = 0; i < (sideLength*sideLength); i++){
        const square = document.createElement('div')
        square.classList.add('square')
        gridContainer.appendChild(square)
        // console.log('added square')

        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = `grey`
        })
    }
}

function fillSquare(position){

}

function resetGrid(){
    const grid = document.querySelectorAll('#grid-container > div')

    grid.forEach((grid) =>{
        grid.style.backgroundColor = `wheat`
    })
}
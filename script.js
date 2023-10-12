

main()


function main(){

    generateSquares(16)
    // fillSquare()
}

function generateSquares(sideLength){
    const gridContainer = document.querySelector('#grid-container')
    gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`

    for (let i = 0; i < (sideLength*sideLength); i++){
        const square = document.createElement('div')
        square.classList.add('square')
        gridContainer.appendChild(square)
        console.log('added square')
    }
}

function fillSquare(position){

}
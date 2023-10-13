let gridSize = 32



function main(){
    
    let sliderNumber = 16

    let slider = document.querySelector('#grid-size-slider')
    let sliderValue = document.querySelector('#slider-value')

    slider.addEventListener('input', (event) =>{
        sliderNumber = Number(event.target.value)
        gridSize = sliderNumber
        sliderValue.textContent = sliderNumber
    })

    slider.addEventListener('mouseup', () =>{
        generateSquares(gridSize)
    })

    generateSquares(gridSize)

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
            square.style.backgroundColor = colorSquare()
        })
    }
}

function colorSquare(){

    return `red`
    
}

function resetGrid(){
    const grid = document.querySelectorAll('#grid-container > div')

    grid.forEach((grid) =>{
        grid.style.backgroundColor = `wheat`
    })
}

main()
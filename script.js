let gridSize = 32



function main(){

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
    clearGrid()
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


let colorDegree = 0

function colorSquare(){

    if (colorDegree >= 360){
        colorDegree = 0
    }
    colorDegree +=1
    let colorSaturation = 98
    let colorLightness = 50
    
    let returnColor = `hsl(${colorDegree},${colorSaturation}%,${colorLightness}%)`

    console.log(returnColor)
    return returnColor
    
}

function resetGrid(){
    const grid = document.querySelectorAll('#grid-container > div')

    grid.forEach((grid) =>{
        grid.style.backgroundColor = `wheat`
    })
}

function clearGrid(){
    let squares = document.querySelectorAll('#grid-container > div')

    squares.forEach((div) => div.remove())
}

main()
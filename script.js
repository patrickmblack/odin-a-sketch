let gridSize = 32

let selectedColor;



function main(){

    const colorButtons = document.querySelectorAll('.color-options')
    for (const radioButton of colorButtons){
        radioButton.addEventListener('change', function() {
            if (this.checked){
                selectedColor = this.value
                console.log(selectedColor)
            }
        })
    }

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


let colorHue = 0
let colorValue;
let colorSaturation = 0
let colorLightness = 100

function colorSquare(){
    let returnColor;

    if (selectedColor == 'rainbow'){
        colorHue +=1
        colorSaturation = 98
        colorLightness = 50
        
        returnColor = `hsl(${colorHue},${colorSaturation}%,${colorLightness}%)`
    }else if(selectedColor == 'shades'){
        // colorLightness from 0% to 100%
        if(colorLightness == 0){
            colorLightness = 100
        }
        colorLightness -= 10
        
        returnColor = `hsl(0,0%,${colorLightness}%)`
    }else{
        returnColor = 'black'
    }
    //console.log(returnColor)
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
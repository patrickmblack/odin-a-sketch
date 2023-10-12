
const grid = document.querySelector('#grid-container')
const square = document.createElement('div')



main()


function main(){

    for (let i = 0; i < 16; i++){
        const square = document.createElement('div')
        grid.appendChild(square)
        console.log('added square')
    }
    // generateSquares(4)
    // fillSquare()
}

function generateSquares(sideLength){
}

function fillSquare(position){

}
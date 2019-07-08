// all the winning rows combinations
const winningRows = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// array of squares of the board
const board = () => Array.from(document.getElementsByClassName('square'));

//click function
const clickFunc = (event) => console.log(event.target)

// add event listener click
const enableListener = () => board().forEach(_squareEl => _squareEl.addEventListener('click', clickFunc));

// remove event listener
const disableListener = () => board().forEach(_squareEl => _squareEl.removeEventListener('click', clickFunc));


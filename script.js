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

//identifying each square's id, excluding sq
const squareIdToNum = (squareEl) => Number.parseInt(squareEl.id.replace('sq', ''));

//identifying empty spaces for the participants
const emptySpace = () => board().filter(_squareEl => _squareEl.innerText === '');

//check if all 3 spaces have the same inner text x's or o's
const sameInnerText = (arr) => arr.every(_squareEl => _square.innerText === arr[0].innerText && _square.innerText !== '');


const takeTurns = (index, letter) => board()[index].innerText = letter;




//click function
const clickFunc = (event) => console.log(event.target)

// add event listener click
const enableListener = () => board().forEach(_squareEl => _squareEl.addEventListener('click', clickFunc));

// remove event listener
const disableListener = () => board().forEach(_squareEl => _squareEl.removeEventListener('click', clickFunc));

enableListener();


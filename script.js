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

//helper functions

// array of squares of the board
const board = () => Array.from(document.getElementsByClassName('square'));

//identifying each square's id, excluding sq
const squareIdToNum = (squareEl) => Number.parseInt(squareEl.id.replace('sq', ''));

//identifying empty spaces for the participants
const emptySpace = () => board().filter(squareEl => squareEl.innerText === '');

//check if all 3 spaces have the same inner text x's or o's
const sameInnerText = (arr) => arr.every(squareEl => squareEl.innerText === arr[0].innerText && squareEl.innerText !== '');

// taking turns 
const takeTurns = (index, letter) => board()[index].innerText = letter;
// choosing random available empty space 
const nextPlayerOpt = () => squareIdToNum(emptySpace()[Math.floor(Math.random() * emptySpace().length)]);






// Finish the game
const endGame = (winningSequence) => { 
    winningSequence.forEach(squareEl => squareEl.classList.add('winner'));
    disableListener(); 
}



// checking if reached winning sequence
const checkWin = () => {
    let victory = false;
    winningRows.forEach( r => {
        const _board = board();
        const sequence = [_board[r[0]], _board[r[1]], _board[r[2]]];
        if(sameInnerText(sequence)) {
            victory = true;
            endGame(sequence);           
        }
    });
    return victory;   
};



//other player's turn 
const nextPlayerTurn = () => {
    disableListener();
    setTimeout(() => {
        takeTurns(nextPlayerOpt(), 'O');
        if(!checkWin()) enableListener();
    }, 1000);
}


//click function
const clickFunc = (event) => {
    takeTurns(squareIdToNum(event.target), 'X');
    if(!checkWin())  nextPlayerTurn();
};

// add event listener click
const enableListener = () => board().forEach(squareEl => squareEl.addEventListener('click', clickFunc));

// remove event listener
const disableListener = () => board().forEach(squareEl => squareEl.removeEventListener('click', clickFunc));

enableListener();



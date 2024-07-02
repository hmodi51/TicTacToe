const cells = document.querySelectorAll('.cell');
let currentplayer = 'X';
let gameOver = false;
const winComb = [ 
                [0,1,2] , [3,4,5] , [6,7,8],
                [0,3,6] , [1,4,7] , [2,5,8],
                [0,4,8] , [2,4,6]
]

document.getElementById('gameStatus').innerText = `Player ${currentplayer}'s Turn`;
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (cell.innerText.trim() !== '' || gameOver) {
            return;
        }
        cell.innerText = currentplayer;
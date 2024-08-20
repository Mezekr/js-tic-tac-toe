const gameBoard = document.querySelector('#game-board');
const infoDisplay = document.querySelector('#game-info');
const startCells = ['', '', '', '', '', '', '', '', ''];

// gameBoard.textContent = 'Here will be the game Board';

const createGameBoard = () => {
	startCells.forEach((cell, index) => {
		const gameCell = document.createElement('div');
		gameCell.classList.add('cell-element');
		gameCell.innerText = index;
		gameBoard.append(gameCell);
	});
};

createGameBoard();

infoDisplay.textContent = 'Circle goes first';

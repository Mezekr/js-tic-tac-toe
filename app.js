const gameBoard = document.querySelector('#game-board');
const infoDisplay = document.querySelector('#game-info');
const startCells = ['', '', '', '', '', '', '', '', ''];
let go = 'circle';

// gameBoard.textContent = 'Here will be the game Board';
infoDisplay.textContent = 'Circle goes first';

const createGameBoard = () => {
	startCells.forEach((_cell, index) => {
		const gameCell = document.createElement('div');
		gameCell.classList.add('cell-element');
		gameCell.id = index;
		gameCell.addEventListener('click', addGo);
		gameBoard.append(gameCell);
	});
};
const addGo = (e) => {
	const goDislay = document.createElement('div');
	goDislay.classList.add(go);
	e.target.append(goDislay);
	go = go === 'circle' ? 'cross' : 'circle';
	infoDisplay.textContent = `Now is turn for ${go.toUpperCase()}!`;
	e.target.removeEventListener('click', addGo);
};

createGameBoard();

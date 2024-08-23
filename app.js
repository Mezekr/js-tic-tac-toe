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
	checkMoves();
};

const checkMoves = () => {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 5],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const allCellElements = document.querySelectorAll('.cell-element');
	console.log(allCellElements);

	winningCombos.forEach((arr) => {
		const isCircleWins = arr.every((cell) =>
			allCellElements[cell].firstChild?.classList.contains('circle')
		);

		if (isCircleWins) {
			infoDisplay.textContent = `Cirle Wins!`;
			allCellElements.forEach((cellElement) =>
				cellElement.replaceWith(cellElement.cloneNode(true))
			);
		}
	});

	winningCombos.forEach((arr) => {
		const isCrossWins = arr.every((cell) =>
			allCellElements[cell].firstChild?.classList.contains('cross')
		);

		if (isCrossWins) {
			infoDisplay.textContent = `Cross Wins!`;
			allCellElements.forEach((cellElement) =>
				cellElement.replaceWith(cellElement.cloneNode(true))
			);
		}
	});
};

createGameBoard();

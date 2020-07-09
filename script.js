let rootOfTable = document.querySelector('.table');
const initialButtonDeleteLineIndent = 52;
const initialButtonDeleteColumnIndent = 53;
const buttonSizeForStep = 52;
let arrayOfLines = rootOfTable.querySelectorAll('tr');
let buttonDeleteLine = document.querySelector('.buttonDeleteLine');
let buttonDeleteColumn = document.querySelector('.buttonDeleteColumn');

document.querySelector('.buttonDeleteLine').addEventListener('click', () => {
	let counter = arrayOfLines.length;
	if(counter > 1){
		let roundIndentTop = parseInt(buttonDeleteLine.style.marginTop);
		let numberOfLine = roundIndentTop - initialButtonDeleteLineIndent;
		numberOfLine /= buttonSizeForStep;
		arrayOfLines[numberOfLine].remove();
		buttonDeleteLine.style.display = "none";
		if(numberOfLine === arrayOfLines.length - 1){
			buttonDeleteLine.style.marginTop = `${roundIndentTop - buttonSizeForStep}px`;
		}
	}
});

document.querySelector('.buttonDeleteColumn').addEventListener('click', () => {
	let line = rootOfTable.querySelector('tr');
	let arrayOfColumns = line.querySelectorAll('td');
	let counter = arrayOfColumns.length;
	if(counter > 1){
		let roundIndentLeft = parseInt(buttonDeleteColumn.style.marginLeft);
		let numberOfColumn = roundIndentLeft - initialButtonDeleteColumnIndent;
		numberOfColumn /= buttonSizeForStep;
		let arrayOfLines = rootOfTable.querySelectorAll('tr');
		for(let count = 0; count < arrayOfLines.length; count++){
			let cubesInLine = arrayOfLines[count].querySelectorAll('td');
			cubesInLine[numberOfColumn].remove();
		}
		buttonDeleteColumn.style.display = "none";
		if(numberOfColumn === arrayOfColumns.length - 1){
			buttonDeleteColumn.style.marginLeft = `${roundIndentLeft - buttonSizeForStep}px`;
		}
	}
});

document.querySelector('.buttonAddColumn').addEventListener('click', () => {
	for(let count = 0; count < arrayOfLines.length; count++){
		let cubeNew = document.createElement('td');
		cubeNew.classList.add('column');
		arrayOfLines[count].appendChild(cubeNew);
	}
});

document.querySelector('.buttonAddLine').addEventListener('click', () => {
	let tBody = rootOfTable.querySelector('tbody');
	let randomLine = tBody.querySelector('tr');
	let arrayOfCubes = randomLine.querySelectorAll('td');
	let lineNew = document.createElement('tr');
	lineNew.classList.add('line');
	for(let count = 0; count < arrayOfCubes.length; count++){
		let cubeNew = document.createElement('td');
		cubeNew.classList.add('column');
		lineNew.appendChild(cubeNew);
	}
	tBody.appendChild(lineNew);
});

document.querySelector('.main').addEventListener('mouseover', () => {
	buttonDeleteLine.style.display = "inline-block";
	buttonDeleteColumn.style.display = "inline-block";
    let indexOfRow = event.target.parentElement.rowIndex;
    let indexOfCell = event.target.cellIndex;
    let randomLine = rootOfTable.querySelector('tr');
	let arrayOfColumns = randomLine.querySelectorAll('td');
    if(arrayOfLines.length === 1 && arrayOfColumns.length > 1){
    	buttonDeleteLine.style.display = "none";
    	buttonDeleteColumn.style.display = "inline-block";
    } else if(arrayOfLines.length === 1){
    	buttonDeleteLine.style.display = "none";
    } else {
    	let sizeOfLine = initialButtonDeleteLineIndent;
    	sizeOfLine += (buttonSizeForStep * indexOfRow);
    	buttonDeleteLine.style.marginTop = `${sizeOfLine}px`;
    }
    if(arrayOfColumns.length === 1 && arrayOfLines.length > 1){
    	buttonDeleteColumn.style.display = "none";
    	buttonDeleteLine.style.display = "inline-block";
    } else if(arrayOfColumns.length === 1){
    	buttonDeleteColumn.style.display = "none";
    } else {
    	let sizeOfColumn = initialButtonDeleteColumnIndent
    	sizeOfColumn += (buttonSizeForStep * indexOfCell);
		buttonDeleteColumn.style.marginLeft = `${sizeOfColumn}px`;
    }
});

document.querySelector('.main').addEventListener('mouseout', () => {
   	buttonDeleteLine.style.display = "none";
    buttonDeleteColumn.style.display = "none";
});
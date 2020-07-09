document.querySelector('.buttonDeleteLine').addEventListener('click', () => {
	let more = document.querySelectorAll('tr');
	let i = more.length;
	if(i > 1){
		let ol = document.querySelector('.buttonDeleteLine');
		let n = parseInt(ol.style.marginTop);
		let l = n - 53;/**/
		l /= 52;
		more[l].remove();
		ol.style.display = "none";
		if(l == more.length - 1){
			ol.style.marginTop = `${n - 52}px`;
		}
	}
});

document.querySelector('.buttonDeleteColumn').addEventListener('click', () => {
	let old = document.querySelector('tr');
	let node = old.querySelectorAll('td');
	let i = node.length;
	if(i > 1){
		let lo = document.querySelector('.buttonDeleteColumn');
		let n = parseInt(lo.style.marginLeft);
		let l = n - 52;/**/
		l /= 52;
		let rel = document.querySelectorAll('tr');
		for(let j = 0; j < rel.length; j++){
			let ket = rel[j].querySelectorAll('td');
			ket[l].remove();
		}
		lo.style.display = "none";
		if(l == node.length - 1){
			lo.style.marginLeft = `${n - 52}px`;
		}
	}
});

document.querySelector('.buttonAddColumn').addEventListener('click', () => {
	old = document.querySelectorAll('.line');
	for(let i = 0; i < old.length; i++){
		let node = document.createElement('td');
		node.classList.add('column');
		old[i].appendChild(node);
	}
});

document.querySelector('.buttonAddLine').addEventListener('click', () => {
	let old = document.querySelector('tbody');
	let our = document.querySelector('tr');
	let cold = our.querySelectorAll('td');
	let one = document.createElement('tr');
	one.classList.add('line');
	for(let j = 0; j < cold.length; j++){
		let ket = document.createElement('td');
		ket.classList.add('column');
		one.appendChild(ket);
	}
	old.appendChild(one);
});

document.querySelector('.main').addEventListener('mouseover', () => {
	let ol = document.querySelector('.buttonDeleteLine');
   	let lo = document.querySelector('.buttonDeleteColumn');
	ol.style.display = "inline-block";
	lo.style.display = "inline-block";
    let i = event.target.parentElement.rowIndex;
    let more = document.querySelectorAll('tr');
    let j = event.target.cellIndex;
    let old = document.querySelector('tr');
	let node = old.querySelectorAll('td');
    if(more.length == 1 && node.length > 1){
    	ol.style.display = "none";
    	lo.style.display = "inline-block";
    } else if(more.length == 1){
    	ol.style.display = "none";
    } else {
    	let n = 52;/**/
    	let ost = 52;
    	n += (ost * i);
    	ol.style.marginTop = `${n}px`;
    }
    if(node.length == 1 && more.length > 1){
    	lo.style.display = "none";
    	ol.style.display = "inline-block";
    } else if(node.length == 1){
    	lo.style.display = "none";
    } else {
    	let h = 53;/**/
    	let tso = 52;
    	h += (tso * j);
		lo.style.marginLeft = `${h}px`;
    }
});

document.querySelector('.main').addEventListener('mouseout', () => {
	let ol = document.querySelector('.buttonDeleteLine');
   	let lo = document.querySelector('.buttonDeleteColumn');
   	ol.style.display = "none";
    lo.style.display = "none";
});
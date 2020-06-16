function del1(){
	let more = document.querySelectorAll('tr');
	let i = more.length;
	if(i > 1){
		let ol = document.querySelector('.button3');
		let n = parseInt(ol.style.marginTop);
		let l = n - 105;
		l /= 102;
		more[l].remove();
	}
}

function del2(){
	let old = document.querySelector('tr');
	let node = old.querySelectorAll('th');
	let i = node.length;
	if(i > 1){
		let lo = document.querySelector('.button4');
		let n = parseInt(lo.style.marginLeft);
		let l = n - 104;
		l /= 102;
		let rel = document.querySelectorAll('tr');
		for(let j = 0; j < rel.length; j++){
			let ket = rel[j].querySelectorAll('th');
			ket[l].remove();
		}
	}
}

function add1(){
	old = document.querySelectorAll('.line');
	for(let i = 0; i < old.length; i++){
		let node = document.createElement('th');
		node.classList.add('column');
		old[i].appendChild(node);
	}
}

function add2(){
	let old = document.querySelector('tbody');
	let our = document.querySelector('tr');
	let cold = our.querySelectorAll('th');
	let one = document.createElement('tr');
	one.classList.add('line');
	for(let j = 0; j < cold.length; j++){
		let ket = document.createElement('th');
		ket.classList.add('column');
		one.appendChild(ket);
	}
	old.appendChild(one);
}

function Show(event) {
   	let ol = document.querySelector('.button3');
   	let lo = document.querySelector('.button4');
    if (ol.style.display != "inline-block" && lo.style.display != "inline-block") { 
		ol.style.display = "inline-block";
		lo.style.display = "inline-block";
    } else {
    	ol.style.display = "none";
    	lo.style.display = "none";
    }
    let i = event.target.parentElement.rowIndex;
    let n = 105;
    let ost = 102;
    n += (ost * i);
    ol.style.marginTop = `${n}px`;
    let j = event.target.cellIndex;
    let h = 104;
    let tso = 102;
    h += (tso * j);
    lo.style.marginLeft = `${h}px`;
}   
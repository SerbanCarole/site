const butonas = document.getElementById("buton");
const lista = document.getElementById("lista");
const input = document.getElementById("tb");
const raspuns = document.getElementById('raspuns');
let raspunsuri = ['Decent guess','Doamne pe bune?','No comment','Ok bun guess'];
butonas.addEventListener("click",apasat);
function apasat(){
	let text = input.value;
	if(text === "GNARF"){
		alert("Bravo, ai gasit cuvantul secret! Respect.");
		raspuns.innerText = 'Felicitari';
		let x = document.createElement("li");
		x.appendChild(document.createTextNode(text));
		lista.appendChild(x);
		input.value = '';
	}else if(text === "Susu Arthur" || text === "susu arthur"){
		raspuns.innerText = 'Chiar credeai';
		let x = document.createElement("li");
		x.appendChild(document.createTextNode(text));
		lista.appendChild(x);
		input.value = '';
	}else {
		let x = document.createElement("li");
		x.appendChild(document.createTextNode(text));
		lista.appendChild(x);
		input.value = '';
		raspuns.innerText = raspunsuri[Math.floor(Math.random()*4)];
	}
	
}
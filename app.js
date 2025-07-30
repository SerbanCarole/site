const butonas = document.getElementById("buton");
const lista = document.getElementById("lista");
const input = document.getElementById("tb");
butonas.addEventListener("click",apasat);
function apasat(){
	let text = input.value;
	if(text === "Susu Arthur" || text === "susu arthur"){
		let sigma = document.createElement('h3');
		sigma.appendChild(document.createTextNode('Chiar credeai'));
		document.getElementById('total').appendChild(sigma);
	}
	if(text === "GNARF"){
		alert("Bravo, ai gasit cuvantul secret! Respect.")
	}
	let x = document.createElement("li");
	x.appendChild(document.createTextNode(text));
	lista.appendChild(x);
	input.value = '';
}
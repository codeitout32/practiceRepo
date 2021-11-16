console.log("hello World");

function sayHelloFiveSeconds(name){
	let prompt = "Hello, " + name + "!";
	
	function inner(){
		alert(prompt);
	}
	
	setInterval(inner, 5000);
}

sayHelloFiveSeconds("Homendra");


const band = {
	bandname: "porcupine tree",
	famousSong: "trains"
}

let {bandname, song} = band;

console.log(bandname);
console.log(song);
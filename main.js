import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();

function warmup1() {
	console.log("Exercise week 1");
	const button = document.querySelector("#button-1a");
	const textp = document.querySelector("#content-1 p");

	button.addEventListener("click", function () {
		textp.textContent = "Hallo, dit is de oefening van je Noah";
	});

	const button2 = document.querySelector("#button-1b");
	button2.addEventListener("click", function () {
		document.querySelector("#section-1").style.backgroundColor = "lightblue";
	});

	const button3 = document.querySelector("#button-1c");
	button3.addEventListener("click", function () {
		const h1 = document.createElement("h1");
		h1.textContent = "Ik ben er klaar voor";
		document.querySelector("#content-1").appendChild(h1);
	});
}

warmup1();

function warmup2() {
	console.log("Exercise week 2");

	let scores = getRandomScores(10); // Bewaar de scores in een variabele

	const buttonA = document.querySelector("#button-2a"); // knop voor tonen
	const buttonB = document.querySelector("#button-2b"); // kop voor sorteren
	const buttonC = document.querySelector("#button-2c"); // kop voor sorteren
	const content = document.querySelector("#content-2"); // content-div ophalen

	// willekeurige getallen (tussen 1 en 20)
	function getRandomScores(amount) {
		return Array.from(
			{ length: amount }, //maakt een lege array met een bepaald aantal elementen
			() => Math.floor(Math.random() * 20) + 1 //math floor en math random voor random getal
		);
	}

	// functie scores weer geven als lijst
	function toonScore(score) {
		const ul = document.createElement("ul"); //maak een ul aan.
		score.forEach((score) => {
			//foreach lus die door elke score gaat.
			const li = document.createElement("li"); //nieuwe li document aanmaken
			li.textContent = `${score}`;
			ul.appendChild(li); //li gaan toevoegen aan de ul
		});

		content.innerHTML = ""; // leeg de content-div
		content.appendChild(ul); // voeg de lijst toe aan content-div
	}

	// tonen van scores
	buttonA.addEventListener("click", function () {
		scores = getRandomScores(10); // Genereer nieuwe scores
		toonScore(scores); //toon de scores.
	});

	// sorteren van scores
	buttonB.addEventListener("click", function () {
		scores.sort((a, b) => a - b); // orteer scores oplopend,
		//a en b worden gesorteerd, Als het resultaat van a - b positief is
		//  "a is groter dan b",  dan komt a later in de gesorteerde array
		// "a komt na b". omgekeerd ook "als a kleinder, dan komt die ervoor"
		toonScore(scores); // toon de gesorteerde lijst
	});

	//score samen tellen.
	buttonC.addEventListener("click", function () {
		const total = scores.reduce((sum, score) => sum + score, 0); // bereken de som van scores  //sum function is een accumulator; opgezocht op google en hulp van chat gpt
		//eerste sum is dan van de array 0 + (score) , volgende = resultaat sum1 + (score2)..... de sum behoudt de tussenresultaten.
		const h1 = document.createElement("h1");
		h1.textContent = `Som scores: ${total}`; // Zet de som in een h1 element
		document.querySelector("#content-2").appendChild(h1); // voeg de h1 toe aan de content
	});
}

warmup2();

function warmup3() {
	console.log("Exercise week 3");
	const button1 = document.querySelector("#button-3a");
	const button2 = document.querySelector("#button-3b");
	let student = getStudentJSON();
	const studentObject = JSON.parse(student);
	console.log(student); //javscript object

	//button
	button1.addEventListener("click", function () {
		console.log(studentObject); //.name ofz voor een speciefike keuze in het json document.
	});

	button2.addEventListener("click", function () {
		//leeg content
		document.querySelector("#content-3").innerHTML = "";
		//naam h1 maken
		const naam = document.createElement("h1");
		//student naam en voornaam
		naam.textContent = `Naam : ${studentObject.firstname} ${studentObject.name}`;
		//voornaam h1 aanmaken
		const leeftijd = document.createElement("h1");
		leeftijd.textContent = `Leeftijd : ${studentObject.age}`; //student age

		const content = document.querySelector("#content-3");
		content.appendChild(naam);
		content.appendChild(leeftijd);

		if (studentObject.isGraduated == true) {
			content.classList.add("graduated"); //content gaan aanroepen voor css toe te voegen.
		} else {
			content.classList.add("not-graduated");
		}
	});
}
warmup3();
function warmup4() {
	let main, min, max;
}

function warmup5() {}

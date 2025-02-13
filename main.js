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
	const scores = getRandomScores(10);
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}

let selectfield = document.getElementById("selectField");
let color0 = document.querySelector(".color0");
let color1 = document.querySelector(".color1");
let color2; let color3; let color4;
let result = document.querySelector(".result");
let body = document.getElementsByTagName("body")[0];
let color = document.getElementsByClassName("color");
let colorContainer = document.getElementById("colorContainer");
let newElement;
let addButton = document.querySelector("#addButton");
let a = color.length;
result.textContent = "linear-gradient(to right, #FF0200, #FFFC00);";
let specialName;

function createNewELEMENT () {
	// var i = color.length;
	specialName = "color" + a;
	newElement = document.createElement("input");
	newElement.setAttribute("type","color");
	newElement.setAttribute("class","color");
	newElement.classList.add(specialName);

	colorContainer.appendChild(newElement);
}

function setNewVariables ( index ) {
	if (index===2) {
		color2 = document.getElementsByClassName("color2")[0];
		color2.addEventListener("input", effectChange);
	}
	if (index===3) {
		color3 = document.getElementsByClassName("color3")[0];
		color3.addEventListener("input", effectChange);
	}
	if (index===4) {
		color4 = document.getElementsByClassName("color4")[0];
		color4.addEventListener("input", effectChange);
	}
}

addButton.addEventListener("click", function (){
	if (a <= 4) {
		createNewELEMENT();
		setNewVariables(a);
		a = a+1;
	}else {
		alert("Sorry only a maximum of 5 Color input are allowed");
	}
	// effectChange();
})


function effectChange() {
	if (color.length===2) {
		body.style.background = "linear-gradient( "
		+ selectField.value + " , "
		+ color0.value + " , " + color1.value + " )";
	}
	if (color.length===3) {

		body.style.background = "linear-gradient( "
		+ selectField.value + " , "
		+ color0.value + " , " + color1.value + " , " + color2.value + " )";
	}
	if (color.length===4) {

		body.style.background = "linear-gradient( "
		+ selectField.value + " , "
		+ color0.value + " , " + color1.value + " , "+ color2.value + " , " + color3.value + " )";
	}
	if (color.length===5) {

		body.style.background = "linear-gradient( "
		+ selectField.value + " , "
		+ color0.value + " , " + color1.value + " , "+ color2.value + " , " + color3.value + " , " + color4.value + " )";
	}

	result.textContent = body.style.background + ";";

/*
// why is this not working
	if (color.length===2) {
		body.style.background = `linear-gradient(${selectField.value}, ${color0.value}, ${color1.value});`;
	}else if (color.length===3) {
		body.style.background = `linear-gradient(${selectField.value}, ${color0.value}, ${color1.value}, ${color2.value});`;
	}else if (color.length===4) {
		body.style.background = `linear-gradient(${selectField.value}, ${color0.value}, ${color1.value}, ${color2.value}, ${color3.value});`;
	}else if (color.length===5) {
		body.style.background = `linear-gradient(${selectField.value}, ${color0.value}, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value});`;
	}
*/
}

color0.addEventListener("input", effectChange);
color1.addEventListener("input", effectChange);
selectField.addEventListener("input", effectChange);

"use strict";
const colorInput = document.querySelector(".colour--input");
const background = document.querySelector(".container");
let hex;
colorInput.addEventListener("keyup", () => {
	hex = colorInput.value;
	hex = hex.toUpperCase();
	let validity = isHexValid();
	if (validity) {
		let i = hex.length;
		while (i <= 6) {
			hex += "0";
			i++;
		}
		if (i > 6) {
			while (i <= 8) {
				hex += "F";
				i++;
			}
		}
	} else {
		hex = "#000";
	}
	console.log(`Output color : ${hex}`);
	background.style.backgroundColor = hex;
});

background.addEventListener("click", () => {
	colorInput.value = "";
	background.style.backgroundColor = "black";
});

const validChars = "0123456789ABCDEF";
function isHexValid() {
	if (hex.length !== 0 && hex[0] !== "#") {
		hex = "#" + hex;
		colorInput.value = hex;
	}
	console.log(`Fixed input : ${hex}`);
	for (let i = 1; i < hex.length; i++) {
		if (validChars.includes(hex[i])) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}
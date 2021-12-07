"use strict";
const colorInput = document.querySelector(".colour--input");
const background = document.querySelector(".container");
let hex;
colorInput.addEventListener("keyup", () => {
	hex = colorInput.value;
	if (hex === "") {
		background.style.backgroundColor = "black";
	}
	hex = hex.toUpperCase();
	let validity = isHexValid();
	if (validity) {
		if (hex.length <= 4) {
			//support for 3 char hex code
			let i = hex.length;
			while (i < 4) {
				hex += 0;
				i++;
			}
		} else {
			//support for 6 and 8 char hex code
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
		}
	} else {
		hex = "#000";
	}
	// console.log(`Output color : ${hex}`);
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
		if (hex.length === 10) {
			hex = hex.slice(0, 9);
		}
		colorInput.value = hex;
	}
	// console.log(`Fixed input : ${hex}`);
	for (let i = 1; i < hex.length; i++) {
		if (validChars.includes(hex[i])) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}

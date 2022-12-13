"use strict";
let currentUrl = window.location.href;

if (currentUrl.indexOf("index.html") != -1) {
	document.getElementById("index").style.transform = "scale(1.5)";
	document.getElementById("index").style.textDecoration = "underline";
	document.getElementById("index").style.color = "#f27289";
} else if (currentUrl.indexOf("flavours.html") != -1) {
	document.getElementById("flavours").style.transform = "scale(1.5)";
	document.getElementById("flavours").style.textDecoration = "underline";
	document.getElementById("flavours").style.color = "#f27289";
} else if (currentUrl.indexOf("verhuur.html") != -1) {
	document.getElementById("verhuur").style.transform = "scale(1.5)";
	document.getElementById("verhuur").style.textDecoration = "underline";
	document.getElementById("verhuur").style.color = "#f27289";
} else if (currentUrl.indexOf("contact.html") != -1) {
	document.getElementById("contact").style.transform = "scale(1.5)";
	document.getElementById("contact").style.textDecoration = "underline";
	document.getElementById("contact").style.color = "#f27289";
} else {
	document.getElementById("index").style.transform = "scale(1.5)";
	document.getElementById("index").style.textDecoration = "underline";
	document.getElementById("index").style.color = "#f27289";
}

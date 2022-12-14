"use strict";

let form = document.getElementById("myForm");
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener("submit", handleForm);
//Dit zorgt ervoor dat de pagina niet refresht wanneer er verstuurd wordt

let naamTxt;
let emailTxt;
let telTxt;
let berichtTxt;
let smakenArray;
let datumTxt;
let locatieTxt;
let aantalTxt;
let hurenTxt;
let personeelTxt;
let tellerSmaken;
let smakenTxt = [];
let allesCorrectIngevuld;

let smaken = [
	"Vanille",
	"Chocolade",
	"Witte Chocolade",
	"Aardbei",
	"Straciatella",
	"Banaan",
	"Tiramisu",
	"Koffie",
	"Karamel",
	"Pistache",
	"Speculoos",
	"Kinder Bueno",
	"Kokos",
	"Citroensorbet",
	"Appelsorbet",
	"Framozensorbet",
	"Bosvruchtenyoghurt",
];

function controleerNaam() {
	if (naamTxt.length < 2) {
		document.getElementById("naamError").innerHTML = "Dit veld moet minstens 2 karakters lang zijn!";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("naamError").innerHTML = "";
	}
}
function controleerEmail() {
	let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
	if (regExp.test(emailTxt) == false) {
		document.getElementById("emailError").innerHTML = "Dit is geen geldig E-mail adres!";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("emailError").innerHTML = "";
	}
}
function controleerTel() {
	if (telTxt.length < 10) {
		document.getElementById("telError").innerHTML = "Dit is geen geldig telefoonnummer!";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("telError").innerHTML = "";
	}
}
function controleerKeuzeSmakenCart() {
	tellerSmaken = 0;
	for (let i = 0; i < smakenArray.length; i++) {
		if (smakenArray[i].checked) {
			tellerSmaken++;
			smakenTxt.push(smaken[i]);
		}
	}
	if (tellerSmaken > 2) {
		document.getElementById("smakenError").innerHTML = "U mag max 2 smaken kiezen bij de cart";
		allesCorrectIngevuld = false;
	} else if (tellerSmaken == 0) {
		document.getElementById("smakenError").innerHTML = "Kies minstens één smaak aub";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("smakenError").innerHTML = "";
	}
}
function controleerKeuzeSmakenTruck() {
	tellerSmaken = 0;
	for (let i = 0; i < smakenArray.length; i++) {
		if (smakenArray[i].checked) {
			tellerSmaken++;
			smakenTxt.push(smaken[i]);
		}
	}
	if (tellerSmaken > 7) {
		document.getElementById("smakenError").innerHTML = "U mag max 7 smaken kiezen bij de truck";
		allesCorrectIngevuld = false;
	} else if (tellerSmaken == 0) {
		document.getElementById("smakenError").innerHTML = "Kies minstens één smaak aub";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("smakenError").innerHTML = "";
	}
}
function controleerDatum() {
	let regExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
	if (regExp.test(datumTxt) == false) {
		document.getElementById("datumError").innerHTML = "Dit is geen geldige datum!";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("datumError").innerHTML = "";
	}
}
function controleerLocatie() {
	if (locatieTxt.length < 2) {
		document.getElementById("locatieError").innerHTML = "Dit veld moet minstens 2 karakters lang zijn!";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("locatieError").innerHTML = "";
	}
}

function controleerAantal() {
	if (aantalTxt == 0) {
		document.getElementById("aantalError").innerHTML = "Geef het aantal personen";
		allesCorrectIngevuld = false;
	} else {
		document.getElementById("aantalError").innerHTML = "";
	}
}

function verstuur() {
	naamTxt = document.getElementById("naam").value;
	emailTxt = document.getElementById("email").value;
	telTxt = document.getElementById("tel").value;
	berichtTxt = document.getElementById("bericht").value;
	smakenArray = document.getElementsByClassName("keuzeSmaak");
	datumTxt = document.getElementById("datum").value;
	locatieTxt = document.getElementById("locatie").value;
	aantalTxt = document.getElementById("aantal").value;

	let allesCorrectIngevuld = true;

	if (naamTxt.length == 0) {
		document.getElementById("naamError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerNaam();
	}

	if (emailTxt.length == 0) {
		document.getElementById("emailError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerEmail();
	}

	if (telTxt.length == 0) {
		document.getElementById("telError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerTel();
	}

	if (document.getElementById("truck").checked) {
		controleerKeuzeSmakenTruck();
		hurenTxt = "Truck";
	} else if (document.getElementById("cart").checked) {
		controleerKeuzeSmakenCart();
		hurenTxt = "Cart";
	} else {
		document.getElementById("smakenError").innerHTML = "Kies cart of truck aub";
		allesCorrectIngevuld = false;
	}

	if (datumTxt.length == 0) {
		document.getElementById("datumError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerDatum();
	}

	if (locatieTxt.length == 0) {
		document.getElementById("locatieError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerLocatie();
	}

	if (aantalTxt.length == 0) {
		document.getElementById("aantalError").innerHTML = "Vul in aub";
		allesCorrectIngevuld = false;
	} else {
		controleerAantal();
	}

	if (document.getElementById("truck").checked || document.getElementById("cart").checked) {
		document.getElementById("hurenError").innerHTML = "";
	} else {
		document.getElementById("hurenError").innerHTML = "Maak een keuze aub";
		allesCorrectIngevuld = false;
	}

	if (document.getElementById("cart").checked) {
		if (document.getElementById("ja").checked) {
			document.getElementById("personeelError").innerHTML = "";
			personeelTxt = "Ja";
		} else if (document.getElementById("nee").checked) {
			document.getElementById("personeelError").innerHTML = "";
			personeelTxt = "Nee";
		} else {
			document.getElementById("personeelError").innerHTML = "Maak een keuze aub";
			allesCorrectIngevuld = false;
		}
	}

	if (allesCorrectIngevuld) {
		let link =
			"mailto:" +
			encodeURIComponent("ddrijvers@cvodeberdieping.be;") +
			"?subject=" +
			encodeURIComponent("Formulier Validatie") +
			"&body=" +
			"naam: " +
			encodeURIComponent(naamTxt) +
			encodeURIComponent("\r\n\n") +
			"email: " +
			encodeURIComponent(emailTxt) +
			encodeURIComponent("\r\n\n") +
			"Telefoonnummer: " +
			encodeURIComponent(telTxt) +
			encodeURIComponent("\r\n\n") +
			"Bericht: " +
			encodeURIComponent(berichtTxt) +
			encodeURIComponent("\r\n\n") +
			"Gekozen smaken: " +
			encodeURIComponent(smakenTxt) +
			encodeURIComponent("\r\n\n") +
			"Datum: " +
			encodeURIComponent(datumTxt) +
			encodeURIComponent("\r\n\n") +
			"Locatie: " +
			encodeURIComponent(locatieTxt) +
			encodeURIComponent("\r\n\n") +
			"Aantal personen: " +
			encodeURIComponent(aantalTxt) +
			encodeURIComponent("\r\n\n") +
			"Keuze huur: " +
			encodeURIComponent(hurenTxt) +
			encodeURIComponent("\r\n\n") +
			"Keuze personeel: " +
			encodeURIComponent(personeelTxt) +
			encodeURIComponent("\r\n\n");
		window.location.href = link;
	}
}

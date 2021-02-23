var boitDeVitesse = 0;
var carbu = 0;
var prix = 0;

var Citadine=[
	["boit-vitesse-2","none"],
	["hyb", "visible"],
	["die", "visible"],
	["elect", "visible"],
	["Esse", "visible"],
	["boit-vitesse-1", "visible"]
];

var Compact=[
	["boit-vitesse-2", "none"],
	["elect", "none"],
	["hyb", "visible"],
	["Esse", "visible"],
	["die", "visible"],
	["boit-vitesse-1", "visible"]
];

var Berline=[
	["elect", "none"],
	["boit-vitesse-1", "none"],
	["hyb", "visible"],
	["Esse", "visible"],
	["die", "visible"],
	["boit-vitesse-2", "visible"]
];

var Utilitaire=[
	["elect", "none"],
	["hyb", "none"],
	["Esse", "none"],
	["boit-vitesse-2", "none"],
	["die", "visible"],
	["boit-vitesse-1", "visible"]
];

function TypeCitadine() {

	for( var i = 0; Citadine.length > i; i++) {
		
		document.getElementById(Citadine[i][0]).style.display = Citadine[i][1];
	}
};


function TypeCompact() {
	for( var j = 0; Compact.length > j; j++) {
		document.getElementById(Compact[j][0]).style.display = Compact[j][1];
	}
};

function TypeBerline() {
	for( var a = 0; Berline.length > a; a++) {
		document.getElementById(Berline[a][0]).style.display = Berline[a][1];
	}
};

function TypeUtilitaire() {
	for( var x = 0; Utilitaire.length > x; x++) {
		document.getElementById(Utilitaire[x][0]).style.display = Utilitaire[x][1];
	}
};
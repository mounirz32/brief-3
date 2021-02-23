var boitDeVitesse = {"automatique": 0.19, "manuelle": 0};
var carbu = {"essence": 0.14, "electrique": 0.05, "hybrid": 0.09, "diesel": 0.21};
var prixv = {"Citadine":12,"Compact":14,"Berline":20,"Utilitaire":16,"Moto":10,"Camion":250,"Chantie":900};

var Citadine=[
	["boit-vitesse-2","none"],
	["hyb", "flex"],
	["die", "flex"],
	["elect", "flex"],
	["Esse", "flex"],
	["boit-vitesse-1", "flex"]
];

var Compact=[
	["boit-vitesse-2", "none"],
	["elect", "none"],
	["hyb", "flex"],
	["Esse", "flex"],
	["die", "flex"],
	["boit-vitesse-1", "flex"]
];

var Berline=[
	["elect", "none"],
	["boit-vitesse-1", "none"],
	["hyb", "flex"],
	["Esse", "flex"],
	["die", "flex"],
	["boit-vitesse-2", "flex"]
];

var Utilitaire=[
	["elect", "none"],
	["hyb", "none"],
	["Esse", "none"],
	["boit-vitesse-2", "none"],
	["die", "flex"],
	["boit-vitesse-1", "flex"]
];

var Moto=[
	["elect", "flex"],
	["Esse", "flex"],
	["hyb", "none"],
	["boit-vitesse-2", "none"],
	["die", "none"],
	["boit-vitesse-1", "none"]
];

var Camion=[
	["elect", "none"],
	["Esse", "none"],
	["hyb", "none"],
	["boit-vitesse-1", "none"],
	["boit-vitesse-2", "flex"],
	["die", "flex"]
];

var Chantie=[
	["elect", "none"],
	["Esse", "flex"],
	["hyb", "none"],
	["boit-vitesse-1", "flex"],
	["boit-vitesse-2", "none"],
	["die", "flex"]
];




function TypeCitadine() {
	index = "Citadine";

	for( var i = 0;i< Citadine.length  ; i++) {
		document.getElementById(Citadine[i][0]).style.display = Citadine[i][1];
	}
};


function TypeCompact() {
	index = "Compact";
	for( var j = 0; j<Compact.length ; j++) {
		document.getElementById(Compact[j][0]).style.display = Compact[j][1];
	}
};

function TypeBerline() {
	index = "Berline";
	for( var a = 0; a < Berline.length ; a++) {
		document.getElementById(Berline[a][0]).style.display = Berline[a][1];
	}
};

function TypeUtilitaire() {
	index = "Utilitaire";
	for( var x = 0;x< Utilitaire.length ; x++) {
		document.getElementById(Utilitaire[x][0]).style.display = Utilitaire[x][1];
	}
};

function TypeMoto() {
	index = "Moto";
	for( var i = 0;i< Moto.length  ; i++) {
		document.getElementById(Moto[i][0]).style.display = Moto[i][1];
	}
};

function TypeCamion() {
	index = "Camion";
	for( var i = 0;i< Camion.length  ; i++) {
		document.getElementById(Camion[i][0]).style.display = Camion[i][1];
	}
};

function TypeChantie() {
	index = "Chantie";
	for( var i = 0;i< Chantie.length  ; i++) {
		document.getElementById(Camion[i][0]).style.display = Chantie[i][1];
	}
};








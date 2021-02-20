var  btv=0;
	var carb=0;
	var prv=0;
	function Reservation_moto() {
		document.getElementById("Hybride").style="display:none";
		document.getElementById("hybr").style="display:none";
		document.getElementById("Diesel").style="display:none";
		document.getElementById("diesel").style="display:none";
		document.getElementById("auto_manu").style="display:none";
		document.getElementById("Electrique").style="display:visible";
		document.getElementById("elec").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("essence").style="display:visible";
		prv=10;


	}

	function Reservation_citadine(){
		document.getElementById("Automatique").style="display:none";
		document.getElementById("auto").style="display:none";
		document.getElementById("auto_manu").style="display:visible";
		document.getElementById("Hybride").style="display:visible";
		document.getElementById("hybr").style="display:visible";
		document.getElementById("Diesel").style="display:visible";
		document.getElementById("diesel").style="display:visible";
		document.getElementById("Electrique").style="display:visible";
		document.getElementById("elec").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("essence").style="display:visible";

		prv=12;

	}
	function Reservation_compact(){
        document.getElementById("Hybride").style="display:visible";
	 	document.getElementById("hybr").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("essence").style="display:visible";
	 	document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("diesel").style="display:visible";
		document.getElementById("Electrique").style="display:none";
		document.getElementById("elec").style="display:none";
		document.getElementById("Automatique").style="display:none";
		document.getElementById("auto").style="display:none";
		document.getElementById("auto_manu").style="display:visible";

		
		prv=14;

	}
	function Reservation_berline(){
		 document.getElementById("Hybride").style="display:visible";
	 	document.getElementById("hybr").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("essence").style="display:visible";
	 	document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("diesel").style="display:visible";
		document.getElementById("Electrique").style="display:none";
		document.getElementById("elec").style="display:none";
		document.getElementById("Manuelle").style="display:none";
		 document.getElementById("manuelle").style="display:none";
		 document.getElementById("auto_manu").style="display:visible";
		 document.getElementById("Automatique").style="display:visible";
		document.getElementById("auto").style="display:visible";

		 prv=20;

	}
	function Reservation_utilitaire(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("elec").style="display:none";
		document.getElementById("Hybride").style="display:none";
		document.getElementById("hybr").style="display:none";
		document.getElementById("Essence").style="display:none";
		document.getElementById("essence").style="display:none";
		document.getElementById("Automatique").style="display:none";
		document.getElementById("auto").style="display:none";
		document.getElementById("auto_manu").style="display:visible";
		document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("diesel").style="display:visible";
	 	document.getElementById("Manuelle").style="display:visible";
		 document.getElementById("manuelle").style="display:visible";

		prv=16;

	}
	function Reservation_engin_de_chantier(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("elec").style="display:none";
		document.getElementById("Hybride").style="display:none";
		document.getElementById("hybr").style="display:none";
		document.getElementById("Automatique").style="display:none";
		document.getElementById("auto").style="display:none";
		document.getElementById("auto_manu").style="display:visible";
		document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("diesel").style="display:visible";
	 	document.getElementById("Manuelle").style="display:visible";
		document.getElementById("manuelle").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("essence").style="display:visible";

		prv=900;

	}
	function Reservation_camion(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("elec").style="display:none";
		document.getElementById("Hybride").style="display:none";
		document.getElementById("hybr").style="display:none";
		document.getElementById("Essence").style="display:none";
		document.getElementById("essence").style="display:none";
		document.getElementById("Manuelle").style="display:none";
		document.getElementById("manuelle").style="display:none";
		document.getElementById("auto_manu").style="display:visible";
		document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("diesel").style="display:visible";
	 	document.getElementById("Automatique").style="display:visible";
		document.getElementById("auto").style="display:visible";

		prv=250;
	}


function calcul() {
if(prv==0){
	alert('selectionner un type');
}

	var dr=document.getElementById('dr').value;
	var i=0;
	var tabC=[5,9,14,21];
	var tabv=[1,19];
	var tabp=[10,12,14,20,16,900,250];
	var rates = document.getElementsByName('gender');
	var btvs = document.getElementsByName('bv');
	var rate_value=-1;
	var bv_value=-1;
	var prixv_value;
	for(i = 0; i < rates.length; i++){
    	if(rates[i].checked){
        	rate_value = i;
    }
}
		if(rate_value!=-1)
     carb=tabC[rate_value];
    for(i = 0; i < btvs.length; i++){
    	if(btvs[i].checked){
        	bv_value = i;
    }
}
	if(bv_value!=-1)
    btv=tabv[bv_value];
    var prixtotale= (prv +carb*100/prv  + btv*100/prv)*dr;
    document.getElementById("prix").innerHTML=prixtotale;


}
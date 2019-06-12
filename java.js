
var cl= console.log;
var btnPlayer1 = document.getElementById("player1");
var btnPierre = document.getElementById("pierre");
var btnFeuille = document.getElementById("feuille");
var btnCiseau = document.getElementById("ciseau");
var NbrAleatoire = Math.floor(Math.random() * Math.floor(45) );
var p = document.querySelector("p");


//
btnPlayer1.addEventListener('click',function(){
 player1();

})

function player1(){

//definition des Bouttons et evenements
btnPierre.addEventListener('click', function(){
	if(tirageAI() == "pierre"){
		p.innerHTML=("EGALITE !! L'IA a choisi aussi la Pierre");
	}else if(tirageAI() == "feuille"){
		p.innerHTML=("Tu as PERDU !! L'IA a choisi la Feuille ");
	}else{
		p.innerHTML=("TU AS GAGNE !! L'IA a choisi le Ciseau");
	}

})

btnFeuille.addEventListener('click', function(){

	if(tirageAI() == "feuille"){
		p.innerHTML=("EGALITE !! L'IA a choisi aussi la Feuille");
	}else if(tirageAI() == "pierre"){
		p.innerHTML=("Tu as PERDU !! L'IA a choisi le Ciseau");
	}else{
		p.innerHTML=("TU AS GAGNE !! L'IA a choisi la Pierre");

	}

})

btnCiseau.addEventListener('click', function(){

	if(tirageAI() == "ciseau"){
		p.innerHTML=("EGALITE !! L'IA a choisi aussi la Feuille");
	}else if(tirageAI() == "feuille"){
		p.innerHTML=("Tu as PERDU !! L'IA a choisi le Ciseau");
	}else{
		p.innerHTML=("TU AS GAGNE !! L'IA a choisi la Pierre");

	}

})


//Gestion de l'AI
function tirageAI(){
	var NbrAleatoire= (Math.floor(Math.random() * Math.floor(3))+1);
	switch(NbrAleatoire) {
		case 1:
		return "pierre";
		break;

		case 2:
		return "feuille";
		break;
			
		
		default:
		return "ciseau";
		return;
	}

}

}

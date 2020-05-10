
$('.ui.dropdown')
  .dropdown();

 var x = document.getElementById("RONALDO");
var a = document.getElementById("Chiellini");
var b = document.getElementById("Dybala");
var c = document.getElementById("Matuidi");
var d = document.getElementById("SZCZESNY");
var e = document.getElementById("PJANIC");
var f = document.getElementById("Costa");
var g = document.getElementById("Cuadrado");
var h = document.getElementById("SANDRO");

x.style.display = "none";
a.style.display = "none";
b.style.display = "none";
c.style.display = "none";
d.style.display = "none";
e.style.display = "none";
f.style.display = "none";
g.style.display = "none";
h.style.display = "none";

function myFunction(){
let user = document.getElementById("user").value;
switch(user){

case "RONALDO":
    document.getElementById("RONALDO").style.display = "block";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	break;
	
	case "Chiellini":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "block";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	
	break;
	case "Dybala":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "block";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	
	break;
	case "Matuidi":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "block";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	
	break;
	case "SZCZESNY":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "block";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	
	break;
	case "PJANIC":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "block";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	break;
	case "Costa":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "block";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "none";
	break;
	case "Cuadrado":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "block";
    document.getElementById("SANDRO").style.display = "none";
	break;
	case "SANDRO":
	 document.getElementById("RONALDO").style.display = "none";
	document.getElementById("Chiellini").style.display = "none";
    document.getElementById("Dybala").style.display = "none";
    document.getElementById("Matuidi").style.display = "none";
    document.getElementById("SZCZESNY").style.display = "none";
    document.getElementById("PJANIC").style.display = "none";
    document.getElementById("Costa").style.display = "none";
    document.getElementById("Cuadrado").style.display = "none";
    document.getElementById("SANDRO").style.display = "block";
	break;
	}
	document.getElementById("user").addEventListener("change", myFunction, true);
	
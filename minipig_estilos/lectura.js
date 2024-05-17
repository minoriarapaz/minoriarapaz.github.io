// JavaScript Document

function agrandar(t) {
	if (t == 0) {
	document.getElementById("Contenido").style.fontSize = "large";
	}
	else if (t == 1) {
		document.getElementById("Contenido").style.fontSize = "x-large";
	}
}
function achicar() {
	document.getElementById("Contenido").style.fontSize = "initial";
}

function colorOscuro() {
	document.getElementById("Contenido").style.backgroundColor ="black";
	/*document.getElementById("Contenido").style.color="gainsboro";*/
}
function colorMedio() {
	document.getElementById("Contenido").style.backgroundColor ="bisque";
	/*document.getElementById("Contenido").style.color="#663333";*/
}
function colorClaro() {
	document.getElementById("Contenido").style.backgroundColor ="ghostwhite";
	/*document.getElementById("Contenido").style.color="dimgray";*/
}



$(document).ready(function(){
  $("#bOscuro").click(function(){
   	$(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	  
	$("p").addClass("textoColorClaro");
	$("p").removeClass("textoColorMedio textoColorDefaul")
	 	  /*aparte de los parrafos*/
	$("h2").addClass("textoColorClaro");
	$("h3").addClass("textoColorClaro");
	$("h4").addClass("textoColorClaro");
	  
	  
	  /*aparte de los parrafos*/
  });
	
	$("#bMedio").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	$("p").addClass("textoColorMedio");
	$("p").removeClass("textoColorClaro textoColorDefaul")
	$("h2").removeClass("textoColorClaro");
	$("h3").removeClass("textoColorClaro");
	$("h4").removeClass("textoColorClaro");
	
  });
	
	
	$("#bClaro").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	$("p").addClass("textoColorDefaul");
	$("p").removeClass("textoColorMedio textoColorClaro")
	$("h2").removeClass("textoColorClaro");
	$("h3").removeClass("textoColorClaro");
	$("h4").removeClass("textoColorClaro");
  });
});

$(document).ready(function(){
  $("#bLM").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
	$("#bLG").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
	$("#bLEG").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
});

/*$(document).ready(function(){
  $("#btn_cerrar").click(function(){
    $("#Control").css("opacity", ".5");
	  console.log("hey");
  });
	
});*/

function showControl() {
	document.getElementById("Control").style.height="60px";
	document.getElementById("ojo").style.display="none";
	console.log("abriste control de lectura");
	
	document.getElementById("Contenido").addEventListener("click", cerrarControl);
}
function cerrarControl() {
	document.getElementById("Control").style.height="0px";
	document.getElementById("ojo").style.display="block";
	console.log("cerraste control");
	document.getElementById("Contenido").removeEventListener("click", cerrarControl);
}
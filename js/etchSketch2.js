/*etchSketch.js*/

$(document).ready(function(){

	for (var x = 0; x<256; x++) {
		$("#gridtainer").append("<div class=sixt></div>");	
	};

	$(".sixt").mouseenter(function(){
		$(this).removeClass("sixt").addClass("hoversixt")
	});
	
	$('#startover').click(function(){
		$("#gridtainer").empty();
		var prompttwo = prompt("How many?");	
		
		for (var x = 0; x<prompttwo; x++) {
			$("#gridtainer").append("<div class=sixt></div>");	
		};		
		
		$(".sixt").mouseenter(function(){
			$(this).removeClass("sixt").addClass("hoversixt")
		});

	});


	$('#fadeout').click(function(){
    	$(".sixt").fadeOut().fadeIn(".sixt");
	});

	$('#destroy').click(function(){
    	$(".hoversixt").fadeOut(".sixt");
	});

});


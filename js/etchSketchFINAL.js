/*etchSketch.js*/

$(document).ready(function(){


	$(function() {
		var div = $('.sixt');
		var width = div.width();
		div.css('height', width);
	});

	for (var x = 0; x<3440; x++) {
		$("#gridtainer").append("<div class=sixt></div>");
	};

	$(".sixt").mouseenter(function(){
		$(this).removeClass("sixt").addClass("hoversixt")
	});
	

	$('#startover').click(function(){
		$("#idear").remove();
		$("#gridtainer").empty();

		var prompttwo = prompt("How many rows do you want?");

		if (isNaN (prompttwo)) {
			alert("Use a number next time smartie!");
			$("#rnbwGrt").remove();
			$("#smartie").remove();
			$("<div><h3>Now you get to look at is this off-centered yet beautiful and colorful rainbow. Enjoy! Click Start Over to try again.</h3></div>").attr('id', 'smartie').prependTo("#button");
			$("#gridtainer").append("<a href='https://www.etsy.com/listing/130215178/plus-sized-off-center-rainbow-tie-dye?ref=shop_home_active_24'><img id='rnbw' src='../img/rainbow.jpg'/>");
			$("#fadeout").fadeOut();
			$("#destroy").fadeOut();
			$("#idea").fadeOut();
			$("#idear").fadeOut();
			$("#wlcm").fadeOut();
			$("<div><h3>Welcome to the rainbow!</h3></div>").attr('id','rnbwGrt').prependTo("#button");

		} else if (prompttwo > 100) {
			$("#gridtainer").append("<div><h1>Do you really need more than 100 rows? OMG no you don't!</h1></div>");
			$("#smartie").remove();
			$("#fadeout").hide();
			$("#destroy").hide();
			$("#idea").hide();
			$("#idear").hide();
			$("#rnbwGrt").fadeOut();
			$("#wlcm").fadeIn();

		} else {

		var prompttwo = prompttwo * 80;
		
		for (var x = 0; x<prompttwo; x++) {
			$("#gridtainer").append("<div class=sixt></div>");
			$("#smartie").remove();
			$("#fadeout").fadeIn();
			$("#destroy").fadeIn();
			$("#idea").fadeIn();
			$("#rnbwGrt").fadeOut();
			$("#wlcm").fadeIn();

		};		

		$(function() {
			var div = $('.sixt');
			var width = div.width();
			div.css('height', width);
		});

		$(".sixt").mouseenter(function(){
			$(this).removeClass("sixt").addClass("hoversixt")
		});

		}
	});


	$('#fadeout').click(function(){
    	$(".sixt").fadeOut(500).fadeIn(15000)(".sixt");
	});

	$('#destroy').click(function(){
    	$(".hoversixt").fadeOut(".sixt");
	});

	
	var myIdeas = [{
    suchAs: "a banana."
},{
	suchAs: "a dinosaur."
},{
	suchAs: "a car."
},{
	suchAs: "a building."
},{
	suchAs: "a face."
},{
	suchAs: "a dog."
},{
    suchAs: "a moustache."
},{
    suchAs: "a tree."
},{
    suchAs: "a fart."
},{
    suchAs: "a train."
},{
    suchAs: "a house."
},{
    suchAs: "the sun and the moon."
},{
    suchAs: "a mountain."
},{
    suchAs: "a bicycle."
},{
    suchAs: "a fox."
},{
    suchAs: "an owl."
},{
    suchAs: "a scenic landscape with you and all of your favorite friends."
},{
    suchAs: "a pineapple."
},{
    suchAs: "an octopus."
},{
    suchAs: "a happy thought."
},{
    suchAs: "the sad thought lingering in your mind. Be open and alert to yourself and it will find you."
},{
    suchAs: "your family."
},{
    suchAs: "a submarine."
},{
    suchAs: "Bart Simpson."
},{
    suchAs: "the rainbow."
},{
    suchAs: "a spaceship."
},{
    suchAs: "the happiest place you have ever been. Imagine that you are there for weeks, or even years. After you've drawn this place ask yourself if it's worth staying here right now. If it is, I suggest you begin right away. If it isn't, I suggest you do whatever your conscience tells you to do. May the eternal daimon always find expression within. NAMASTE."    
},{
    suchAs: "the dragon you always imagined killing if you played D&D. If you do play D&D, draw a dragon you couldn't kill even you had the all the powers of Malkor."    
},{
    suchAs: "a sleeping bunny."
},{
    suchAs: "an intergalactic planetary meeting." 
},{
    suchAs: "a soccerball."
},{
    suchAs: "your favorite constellation in the night sky."   
},{
    suchAs: "a squirrel with a bushy tail."
    	}];

	var randomIdea = Math.floor(Math.random() * myIdeas.length);

	$('#idea').click(function(){
	$("#bottombutts").after("<div id='idear'></div>");
		$('#idea').fadeOut();
		$("#idear").text("Draw " + (myIdeas[randomIdea].suchAs));
		
	});


});





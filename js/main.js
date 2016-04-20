// window.onload = function(){
// 	var start = new TimeLineMax()
// 		.fromTo( "top-nav", 1, {y: "-100%"}, {y: "0%"});

// 	console.log("start is: " + start);
// };
var start,
    choiceListMoveIn;

$(document).ready(function(){
	//var posStart = new TimelineMax()
//			.fromTo( ".top-nav", .75, {y: "-100%"}, {y: "0%"})
	//		.fromTo(".pos-list", 1, {scale: 0}, {scale: 1}, "-=.5");

	// $(".calc").on("click", function(){
	// 	start.reverse();
	// });	

	var main_original_content = $('main').html();
	var moveOut;

	video = $("#preload_video").get(0);
	setTimeout(function () {  
	     video.play();  
	 }, 100);  

	$(".main-content-container").on("swipeleft", function(){
		swipeApplications("left");
	});

	$(".main-content-container").on("swiperight", function(){
		swipeApplications("right")
	});

	$(".bottom-nav li a").on("click", function(){
		//console.log("this is getting clicked");
		var current_index = $('.bottom-nav li.active').index();
		$(".bottom-nav li").removeClass("active");
		$(this).parent().addClass("active");
		var target_index = $(this).parent().index();
		
		from_percenage = (current_index * -50).toString() + "%";
		to_percenage = (target_index * -50).toString() + "%";
		var moveContent = new TimelineMax()
			.fromTo(".main-content-container", 1, {x: from_percenage}, {x: to_percenage});
	});

	$(".app-button.pos").on("click", function(){
		var active_main_content = $(this).parent().parent(".main-content");
		moveOut = new TimelineMax()
			.fromTo(".clicked-obj", .25, {scale: 0}, {scale: 1})
			.fromTo(active_main_content, .5, {scale: 1}, {scale: 0})
			.fromTo(".bottom-nav.dots", .5, {opacity: 1}, {opacity: 0}, "-=.5")
			.fromTo(".logo", .5, {y: "0%"}, {y: "-200%"}, "-=.5")
			.fromTo(".calc", .5, {x: "0%"}, {x: "-100%"}, "-=.5")
			.add( movePosIn );
	});

	$(".pos-sale").on("click", function(){
		var moveToAmount = new TimelineMax()
			.fromTo(".clicked-pos-type", .25, {scale: 0}, {scale: 1})
			.fromTo(".pos-list", .5, {x: "0%"}, {x: "-120%"})
			.fromTo(".sale-container", .5, {x: "0%"}, {x: "-100%"}, "-=.5");
	})

	$('.sale-input').on("click", function(){
		var transformCalc = new TimelineMax()
			.fromTo(".clicked-pos-sale", .25, {scale: 0}, {scale: 1})
			.set(".clicked-pos-sale", {scale: 0})
			.set(".sale-input-form", {css: {className: "+=active"}})
			.set(".sale-input", {css: {className: "+=inactive"}})
			.fromTo(".sale-input-form", 1, {bottom: "0" }, {top: "0px", bottom: "120%", width: "100%"})
			.set(".calculator",  {css: {className: "+=active"}}, "-=1")
			.fromTo(".calculator", 1, {y: "100%"}, {y: "0%"}, "-=1")
			.set(".sale-input-form .sale-clear", {css: {className: "+=active"}});
	});

	$(".sale-clear").on("click", function(){
		$(".sale-input-form .result").text("");
	});

	$(".calculator span").on("click", function(){
		var input = $(".sale-input-form .result");
		var btnVal = $(this).data("value");
		scaleEl = $(this).children(".clicked-key-value");
		var clickedScale = new TimelineMax()
			.fromTo(scaleEl, .25, {scale: 0}, {scale: 1})
			.set(scaleEl, {scale: 0});

		console.log("input text: " + input.text() + " btnVal: " + btnVal);
		switch(btnVal){
			case "cancel":
				break;
			case "enter": 
				var enterNewAmount = new TimelineMax()
					.fromTo(".calculator", 1, {y: "0%"}, {y: "100%"})
					.set(".sale-input-form .sale-clear", {css: {className: "-=active"}}, "0")
					.to(".sale-input-form", 1, {bottom: 0, width: "501px"}, "0")
					.fromTo(".bottom-controls", .5, {y: "0%"}, {y: "-100%"});
				break;
			default:
				input.append(btnVal);
		}


	});

	$(".bottom-controls .enter").on("click", function(){
		var intructionText = new TimelineMax()
			.fromTo(".enter .clicked-enter", .25, {scale: 0}, {scale: 1})
			.fromTo('.bottom-controls .enter', 1, {x: "0%"}, {x: "100%"})
			.fromTo('.bottom-controls .enter', .1, {opacity: 1}, {opacity: 0}, ".25")
			.to('.bottom-controls .cancel', 1, {width: "101%"}, 0)
			.to(".top-nav", 1, {opacity: 0}, 0)
			.to(".sale-input-form",1, {opacity: 0}, 0)
			.set("section.signature-slides", {css: {className: "+=active"}}, "1")
			.from(".signature-tint", .5, {opacity: 0})
			.from(".payment-icons", .5, {opacity: 0, ease:Power1.easeInOut}, "-=.5")
			.from(".swipe", .5, {width: '0%', ease:Power1.easeInOut})
			.from(".insert", .5, {opacity: 0, x: '100%', ease:Power1.easeInOut})
			.from(".tap", .5, {opacity: 0, ease:Power1.easeInOut})
			.to('.bottom-controls .cancel', .5, {width: "50%"}, "+=1")
			.fromTo('.bottom-controls .signature-enter', .5, {x: "100%", display: "inline-block"}, {x: "0%"}, "-=.5")
			.set(".signature-instructions", {css: {className: "+=inactive"}})
			.set(".signature-line-container", {css: {className: "+=active"}})
			.from(".signature-line", 1, {width: '0%'})
			.fromTo(".sign-here", 1, {height: "0%"}, {height: "70px", opacity: 1})
			.to(".sign-here", .5, {opacity: 0}, "+=.5")
			.set(".canvas-container", {css: {className: "+=canvas-active"}})
			.add( activateCanvas );
			//.to(".sign-here", .5, {opacity: 0}, "+=.5");
	});

	$(".bottom-controls .signature-enter").on("click", function(){
		var animateEnter = new TimelineMax()
			.fromTo(".signature-enter .clicked-enter", .25, {scale: 0}, {scale: 1})
			.addCallback(loadThankYou);
			//.addCallback(reloadPage); 
	});

	$(".back-btn").on("click", function(){
		reloadPageBeginning();
	});

	$(".cancel").on("click", function(){
		reloadPageBeginning()
	});

	$(".btn-restart").on("click", function(){
		reloadPage();
	});

	$(".home-btn").on("click", function(){
		reloadPage();
	});

	$(".intro-video").on("click", function(){
		$(this).removeClass("active");
		$('.home').addClass("active");
		startAnimation();
	});


	// $(".back-to-apps").on("click", function(){
	// 	//console.log("reverse started");
	// 	//moveOut.play();
	// 	moveOut.reverse();
	// });

	// var signatureTimeline = new TimelineMax()
	// 	.from(".swipe", .5, {width: '0%', ease:Power1.easeInOut})
	// 	.from(".insert", .5, {opacity: 0, x: '100%', ease:Power1.easeInOut})
	// 	.from(".tap", .5, {opacity: 0, ease:Power1.easeInOut})
	// 	.to('.bottom-controls .cancel', .5, {width: "50%"})
	// 	.fromTo('.bottom-controls .signature-enter', .5, {x: "100%", display: "inline-block"}, {x: "0%"}, "-=.5")
	// 	.to(".signature-instructions", .5, {opacity: 0, display: "none"});

	// var signHereTimeline = new TimelineMax()
	// 	.from(".signature-line", 1, {width: '0%'})
	// 	.from(".sign-here", 1, {height: "0%"})
	// 	.to(".sign-here", .5, {opacity: 0}, "+=.5");
	// $(".canvas-container").on("DOMSubtreeModified", function(){
	// 	alert("this changes");
	// });
	
});

function reloadPage(){
	location.reload();
}

function reloadPageBeginning(){
	$('section').removeClass("active");
	$('.home').addClass('active');
	$('section [style]').removeAttr('style');
	$(".bottom-nav li").removeClass('active');
	$(".bottom-nav li:first").addClass('active');
	var resetApplications = new TimelineMax()
		.to(".main-content-container", .25, {x: "0%"}, 0);
}

function loadThankYou(){
	ending = new TimelineMax()
		.set(".ending-thank-you", {css: {className: "+=active"}})
		.fromTo(".ending-thank-you", .75, {opacity: 0}, {opacity: 1});
}

function swipeApplications(direction){
	var current_index = $('.bottom-nav li.active').index();
	var target_index;
	if (direction == "left"){
		target_index = current_index + 1; 
	}
	else{
		target_index = current_index - 1
	}
	if( (target_index > 1) || (target_index < 0)){
		return;
	}
	$(".bottom-nav li").removeClass("active");
	$(".bottom-nav li").eq(target_index).addClass("active");
	from_percenage = (current_index * -50).toString() + "%";
	to_percenage = (target_index * -50).toString() + "%";
	var moveContent = new TimelineMax()
		.fromTo(".main-content-container", 1, {x: from_percenage}, {x: to_percenage});
}


function clearProps(scene) {
    var targets = scene.getChildren();
    for (var i = 0; i <= targets.length; i++) {
        TweenMax.set(targets[i].target.selector, {
            clearProps: "all"
        });
    }
}
    
// function clearAllProps() {
//         var timeLines = [start, posStart, directSelect];
//         for (var x = 0; x <= timeLines.length; x++) {
//             clearProps(timeLines[x]);
//         }
// }

function startAnimation(){
	start = new TimelineMax()
			.fromTo( ".top-nav", .75, {y: "-100%"}, {y: "0%"}, 0)
			.fromTo( ".main-content", .75, {y:"100%"}, {y: "0%"}, "-=.75")
			.fromTo(".calc", .5, {x: "-100%"}, {x: "0%"})
			.fromTo(".bottom-nav.dots", .5, {y: "100%"}, {y: "0%"}, "-=.5");
}
function movePosIn(){
	choiceListMoveIn = new TimelineMax()
		.set("section.pos-selection", {css: {className: "+=active"}})
		.fromTo(".pos-list", .5, {scale: 0}, {scale: 1}, "-=.5")
		.fromTo(".top-nav", .5, {y: "-100%"}, {y: "0%"}, "-=.5");			
}


//SIGNATURE CANVAS METHODS: 
function activateCanvas(){
	var can = $('#signature')[0],
		ctx = can.getContext('2d'),
		mousePressed = false,
		mouseX = 0,
		mouseY = 0;
	// var canvas_width = $('.canvas-container').width(); 
	// var canvas_height = $('.canvas-container').height(); 
	// can.width = canvas_width; 
	// can.height = canvas_height; 
	ctx.strokeStyle ='#ffffff';
	can.addEventListener('touchmove', onTouchMove, false);
	can.addEventListener('touchstart', onTouchStart, false);
	can.addEventListener('touchend', onMouseUp, false);
	can.addEventListener('mousemove', onMouseMove, false);
	can.addEventListener('mousedown', onMouseDown, false);
	can.addEventListener('mouseup', onMouseUp, false);

	var topOffset = $('#signature').offset().top;
	var leftOffset = $('#signature').offset().left; 

	function onTouchMove(event){
		if (mousePressed) {
			event.preventDefault();
			mouseX = (event.targetTouches[0].pageX) - leftOffset;
			mouseY = (event.targetTouches[0].pageY) - topOffset;
			ctx.lineTo(mouseX, mouseY);
			ctx.stroke();
		}
	}

	function onTouchStart(event){
		mousePressed = true;
		mouseX = (event.targetTouches[0].pageX) - leftOffset;
		mouseY = (event.targetTouches[0].pageY) - topOffset;
		ctx.beginPath();
		ctx.moveTo(mouseX, mouseY);
	}

	function onMouseUp(event){
		mousePressed = false;
	}

	function onMouseMove(event) {
		if (mousePressed) {
			event.preventDefault();
			mouseX = event.clientX - leftOffset;
			mouseY = event.clientY - topOffset;
			ctx.lineTo(mouseX, mouseY);
			ctx.stroke();
		}
	}

	function onMouseDown(event) {
		console.log("onMouseDown")
		mousePressed = true;
		mouseX = event.clientX - leftOffset;
		mouseY = event.clientY - topOffset;
		ctx.beginPath();
		ctx.moveTo(mouseX, mouseY);
	}
	// Table
	//$('#clearsig')[0].addEventListener('click', clearSignature, false);
	
	//function clearSignature() {
	//	ctx.clearRect(0, 0, can.width, can.height);
	//}
}




// window.onload = function(){
// 	var start = new TimeLineMax()
// 		.fromTo( "top-nav", 1, {y: "-100%"}, {y: "0%"});

// 	console.log("start is: " + start);
// };

$(document).ready(function(){
 	var start = new TimelineMax()
			.fromTo( ".top-nav", .75, {y: "-100%"}, {y: "0%"})
			.fromTo( ".main-content", .75, {y:"100%"}, {y: "0%"}, "-=.75")
			.fromTo(".calc", .5, {x: "-100%"}, {x: "0%"})
			.fromTo(".bottom-nav.dots", .5, {y: "100%"}, {y: "0%"}, "-=.5");

	var posStart = new TimelineMax()
			.fromTo( ".top-nav", .75, {y: "-100%"}, {y: "0%"})
			.fromTo(".pos-list", 1, {scale: 0}, {scale: 1}, "-=.5");

	var isDragging = false;

	$(".bottom-nav li a").on("click", function(){
		//console.log("this is getting clicked");
		var current_index = $('.bottom-nav li.active').index();
		$(".bottom-nav li").removeClass("active");
		$(this).parent().addClass("active");
		var target_index = $(this).parent().index();
		
		from_percenage = (current_index * -33.33).toString() + "%"
		to_percenage = (target_index * -33.33).toString() + "%"
		var moveContent = new TimelineMax()
			.fromTo(".main-content-container", 1, {x: from_percenage}, {x: to_percenage});
	});

	$(".app-button.pos").on("click", function(){
		var active_main_content = $(this).parent().parent(".main-content");
		var moveOut = new TimelineMax()
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

	// $(".main-content.active").mousedown(function() {
	// 	console.log("mousedown");
 //        isDragging = false;
 //    })
 //    .mousemove(function() {
 //        isDra gging = true;
 //     })
 //    .mouseup(function() {
 //    	console.log("mouseup");
 //        var wasDragging = isDragging;
 //        isDragging = false;
 //        if (wasDragging) {
 //            var dragAnimation = new TimelineMax()
 //            	.fromTo(".main-content.first", .75, {x: "0%"}, {x: "-100%"})
 //            	.set(".main-content.first", {css:{className:'main-content first hide'}})
 //            	.set(".main-content.second", {css:{className:'main-content second active'}})
 //            	.fromTo(".main-content.second", .75, {x: "80%"}, {x: "0%"},"-=.75");
 //         	console.log("end of dragAnimation")
 //        }
 //    });
});


function movePosIn(){
	var choiceListMoveIn = new TimelineMax()
		.set("section.pos-selection", {css: {className: "+=active"}})
		.fromTo(".pos-list", .5, {scale: 0}, {scale: 1}, "-=.5")
		.fromTo(".top-nav", .5, {y: "-100%"}, {y: "0%"}, "-=.5");			
}
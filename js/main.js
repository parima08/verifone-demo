// window.onload = function(){
// 	var start = new TimeLineMax()
// 		.fromTo( "top-nav", 1, {y: "-100%"}, {y: "0%"});

// 	console.log("start is: " + start);
// };

$(document).ready(function(){
 	var start = new TimelineMax()
			.fromTo( ".top-nav", .75, {y: "-100%"}, {y: "0%"})
			.fromTo( ".main-content", .75, {y:"100%"}, {y: "0%"}, "-=.75")
			.fromTo(".calc", .5, {x: "-100%"}, {x: "0%"});

	var isDragging = false;

	$(".main-content.active").mousedown(function() {
		console.log("mousedown");
        isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
     })
    .mouseup(function() {
    	console.log("mouseup");
        var wasDragging = isDragging;
        isDragging = false;
        if (wasDragging) {
            var dragAnimation = new TimelineMax()
            	.fromTo(".main-content.first", .75, {x: "0%"}, {x: "-100%"})
            	.set(".main-content.first", {css:{className:'main-content first hide'}})
            	.set(".main-content.second", {css:{className:'main-content second active'}})
            	.fromTo(".main-content.second", .75, {x: "100%"}, {x: "0%"});
         	console.log("end of dragAnimation")
        }
    });
});
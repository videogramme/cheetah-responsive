function cycleSprites() {
	
	$(".sprite").each(function() {
		
		var currentFrame=$(this).data("current-frame");
		var frames=$(this).data("frames");
		
		if (currentFrame < ( frames - 1) ) {
			
			currentFrame++;
			
		} else {
			
			currentFrame=0;
			
		}
		
		setSpriteFrame($(this),currentFrame);
		
	});

}



function setSpriteFrameHandler(event) {
	
	var element = $(event.target);
	var frame = element.data("frame");
	var container = element.parent();
	
	container = element.parents().filter(".slider").get(0);
	
	setSpriteFrame(container,frame); 
		
}

function setSpriteFrame(element,currentFrame) {
	
	if (currentFrame < 0) {
		currentFrame=0;
	}
	
	
	try {	
		var frames = $(element).data("frames");
		if (currentFrame > (frames - 1) ) {
			currentFrame = frames - 1;
		}
		$(element).data("current-frame",currentFrame);
		$(element).find("img").first().css("left", (currentFrame * -100) + "%"); 
		
		return true;
		
	} catch (err) {
		
		return false;
			
	}	
		
}

function moveSliderBarMarker(event) {
	
	var element = event.target;
	var container = element.parentNode;
	var percentage = (event.offsetX + event.target.offsetLeft - 3 ) / container.offsetWidth * 100;
	$(container).find(".slider-marker").css("left", percentage + "%");
	
	
}

function moveSlider(event) {
	
	var element = $(event.target);
	var percentage = (event.offsetX ) / event.target.offsetWidth * 100;
	var slider = $("#" + element.data("slider-id"));

	element.find(".slider-marker").css("left",percentage + "%");
	
	var frames = slider.data("frames");
	
	var eachframe = 100/(frames - 1);
	var frame = Math.floor(percentage / eachframe);
	 
	if(percentage >= 0 && percentage <= 100) {
		
		setSpriteFrame(slider,frame);	
		event.stopPropagation();

	}
	
}

function touchSlider(event) {

	var newEvent = event;
	var element = $(event.target);
	newEvent.offsetX = event.originalEvent.targetTouches[0].clientX - $(event.target).offset().left;
	event.stopPropagation();
	event.preventDefault();
	moveSlider(newEvent);	 
	
}


function buildSliderBar(element) {
	
	var element = $(element);
	var frames=element.data("frames");
	
	if ( ! frames ) {
	
		frames = 1;
			
	}
	
	if ( ! element.attr("id") ) {
	
		element.attr("id","slider-bar-" + Math.floor(Math.random() * 100000))

	}
	
	var slider_bar_id = element.attr("id");
	var slider_bar = element.find(".slider-bar");
	
	if ( ! slider_bar.length ) {
		
		element.append("<div class='slider-bar'></div>");
		slider_bar = element.find(".slider-bar");

	}
	slider_bar.data("slider-id",slider_bar_id);
	
	slider_bar.on("mouseover mousemove click",moveSlider);
	slider_bar.on("touchstart touchmove",touchSlider);
	
	$(window).resize(adjustSliderContainers);
	
	adjustSliderContainer(element);
	element.addClass("built");
	
}

 
function rebuildSliderBars() {

	$(".slider").removeClass("built");
	$(".slider").each(function() { buildSliderBar(this); } ) ;

}

// Works around a bug with sub-pixel rendering in WebKit
 
function adjustSliderContainer(element) {
	
	try {
	
		element=$(element);
		
		$(element).find("img").first().parent().css({width:""});
		 
		var thewidth=Math.floor($(element).find("img").first().parent()[0].getBoundingClientRect().width); 
		$(element).find("img").first().parent().css({width:thewidth + "px"}); 
	
	} catch (err) {
		 
		
	}
	
}

function adjustSliderContainers() {
	
	$(".slider").each(function() { adjustSliderContainer(this); } ) ; 
	
}



$(document).ready(function() {
		
	$(".slider").each(function() { buildSliderBar(this); } ) ; 
	
} ) ;

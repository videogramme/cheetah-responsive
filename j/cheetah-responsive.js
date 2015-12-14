

function loadStyleSheet(uri) {
	if (document.createStyleSheet) {
	// Covers all IE, but needed to load the CSS in IE8
		document.createStyleSheet(uri);
	} else {
		var theLink=document.createElement("link");
		if (theLink !== undefined) {
		    theLink.setAttribute("rel", "stylesheet");
		    theLink.setAttribute("type", "text/css");
		    theLink.setAttribute("media", "screen");
		    theLink.setAttribute("href", uri);
		    document.getElementsByTagName("head")[0].appendChild(theLink);
		}
	}
}


/* Ad tools. */
	
	var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
	(function() {
	  var gads = document.createElement('script');
	  gads.async = true;
	  gads.type = 'text/javascript';
	  var useSSL = 'https:' == document.location.protocol;
	  gads.src = (useSSL ? 'https:' : 'http:') +
	    '//www.googletagservices.com/tag/js/gpt.js';
	  var node = document.getElementsByTagName('script')[0];
	  node.parentNode.insertBefore(gads, node);
	})();
	
function getAdSlotTop() {
	
	if (window.ourAdSlotTop) {
		
		return window.ourAdSlotTop;
		
	} 
	else if (window.location.href.indexOf("climate") > -1) {
		
		return "/2994/ng.ngm/climate-change";
		
	}
	else if (window.location.href.indexOf("animal") > -1) {
		
		return "/2994/ng.ngm/animals_rotation";
		
	}
	else if (window.location.href.indexOf("explore") > -1) {
		
		return "/2994/ng.ngm/explorer";
		
	}
	else if (window.location.href.indexOf("science") > -1) {
		
		return "/2994/ng.ngm/science_rotation";
		
	}
	else if (window.location.href.indexOf("travel") > -1) {
		
		return "/2994/ng.ngm/travel_rotation";
		
	}
	else {
		
		return "/2994/ng.ngm";
			
	}
	
}

function getAdSlotMiddle() {
	
	if (window.ourAdSlotMiddle) {
		
		return window.ourAdSlotMiddle; 
		
	} 
	else if (window.location.href.indexOf("climate") > -1) {
		
		return "/2994/ng.ngm/ng2_climate-change";
		
	}
	else if (window.location.href.indexOf("animal") > -1) {
		
		return "/2994/ng.ngm/ng2_animals_rotation";
		
	}
	else if (window.location.href.indexOf("explore") > -1) {
		
		return "/2994/ng.ngm/ng2_explorer";
		
	}
	else if (window.location.href.indexOf("science") > -1) {
		
		return "/2994/ng.ngm/ng2_science_rotation";
		
	}
	else if (window.location.href.indexOf("travel") > -1) {
		
		return "/2994/ng.ngm/ng2_travel_rotation";
		
	}
	else {
		
		return "/2994/ng.ngm";
			
	}
	
}


/* Look for ad units and load them. */

function prepareAds() {
 
	$(".ad-unit-728").not(".prepared").each( function(index) { 
		
		var self=this; 
		var theID=self.id;
		if (theID && isElementInViewport ($(self).get(0) )) {
							
			window.currentAdIndex++;
	
			if (console.log) {
				
				console.log("adding 728px ad slot #" + window.currentAdIndex);
				
			}
			
			googletag.cmd.push(function() {
				
				if ($(self).data("slot")) {
					
					googletag.defineSlot($(self).data("slot"), [[728, 90], [320, 50]], theID ).addService(googletag.pubads());
					
				} else {
					
	    			googletag.defineSlot((window.currentAdIndex>1 ? getAdSlotMiddle() : getAdSlotTop() ), [[728, 90], [320, 50]], theID ).addService(googletag.pubads());
				
				}
					
			    googletag.pubads().enableSingleRequest();
			    googletag.pubads().collapseEmptyDivs();
			    googletag.enableServices();
			    googletag.display(theID);
			    $(self).addClass("prepared");
		  	});
		  	
		}
		
	}); 
	
	$(".ad-unit-210").not(".prepared").each( function(index) {

		// exempt from this because there's only ever one.
		// window.currentAdIndex++;

		var self=this; 
		var theID=self.id;
		if (theID && isElementInViewport ($(self).get(0) )) {
			
			if (console.log) {
			
				console.log("adding 210px ad slot");
			
			}
		  	
		  	googletag.cmd.push(function() {
				
				if ($(self).data("slot")) {
					 
					googletag.defineSlot($(self).data("slot"), [210, 50], theID ).addService(googletag.pubads());
					
				} else {
					
					googletag.defineSlot(getAdSlotTop(), [210, 50], theID ).addService(googletag.pubads());
			    
				}
				
				googletag.pubads().enableSingleRequest();
			    googletag.pubads().collapseEmptyDivs();
			    googletag.enableServices();
			    googletag.display(theID);
			    $(self).addClass("prepared");
			  });
			  
		}
		
	});
	 
	$(".ad-unit-300").not(".prepared").each( function(index) {
		
		var self=this;
		var theID=self.id;
		if (theID && isElementInViewport ($(self).get(0) )) { 
			
			window.currentAdIndex++;

			if (console.log) {
		
				console.log("adding 300px ad slot #" + window.currentAdIndex);
		
			}

		  	googletag.cmd.push(function() {
			  	
				if ($(self).data("slot")) {
					  
					googletag.defineSlot($(self).data("slot"), [300, 250], theID ).addService(googletag.pubads());
					
				} else {

				  	index++;
		    		googletag.defineSlot((window.currentAdIndex>1 ? getAdSlotMiddle() : getAdSlotTop() ), [300, 250], theID ).addService(googletag.pubads());
	    		
				}
				
			    googletag.pubads().enableSingleRequest();
			    googletag.pubads().collapseEmptyDivs();
			    googletag.enableServices();
			    googletag.display(theID);
			    $(self).addClass("prepared");
			  });
			  
		}
		
	});
	
}

/* Enable interactive, collapsible drawers. */

function prepareDrawers() {

	$("div.drawer div.header").not(".prepared").each(function() {
		$(this).click(
		function() {
			$(this).parent().toggleClass("closed");
			return false;
			} ) ;  
		$(this).addClass("prepared");
		} ) ;
	$("div.drawer").addClass("closed");
	$("div.drawer").first().removeClass("closed");
	
}



function prepareOverlay() {

	var theOverlayHeres=document.getElementsByClassName("overlay-title-here");
	
	if (theOverlayHeres.length) {
		
		var theOverlayHere=theOverlayHeres[0];
		var theTitles=document.getElementsByClassName("title");
		var theOverlay=document.createElement("div");
		theOverlayHere.appendChild(theOverlay);
		addClass(theOverlay,"overlay");
		
		if (theTitles && theTitles.length) {
			
			// NodeLists rearrange as you change the DOM so we start at the end and work backwards
				
			for (var i=theTitles.length - 1; i >= 0; i-- ) { 
				
				// more gymnastics
			
				theOverlay.insertBefore(theTitles[i],theOverlay.firstChild);
				
			}
		
		}
		
		addClass(theOverlayHere,"overlay-container");
		removeClass(theOverlayHere,"overlay-title-here");
		
		var theID="hide-overlay";
		
		var theLabel=document.createElement("label");
		theLabel.htmlFor=theID;
		theLabel.className="hide-overlay";
		var theCheckbox=document.createElement("input");
		theCheckbox.type="checkbox";
		theCheckbox.id=theID;
		try {
			
			if (theOverlayHere.firstChild.nodeType === Node.TEXT_NODE) {
				
				theOverlayHere.insertBefore(theLabel,theOverlayHere.firstChild.nextSibling.nextSibling);
			
			} else {
				
				theOverlayHere.insertBefore(theLabel,theOverlayHere.firstChild.nextSibling);
			
			}
	
		} catch(err) {
			
		}
					
		theOverlayHere.insertBefore(theCheckbox,theOverlayHere.firstChild);

	} else {
		
		setTimeout(prepareOverlay,25);
	
	}	
	 	
}

/* Allow for client-side includes. Usage:

<div class="include" data-include="/2015/11/promo-series-climate-change.html">

*/

function prepareIncludes() {
	
	$(".include").each(function(){ 
		
		$(this).load(
			$(this).data("include")
			).removeClass("include").removeData("include");
	});
		
}

function prepareSlideShows() {
	
	if (typeof(ourSlideShows)=="undefined") {
		
		setTimeout(prepareSlideShows,500);
		return;

	}
	
	var theIDs=Object.keys(ourSlideShows);
	
	for (var i=0; i<theIDs.length; i++) {
		
		if (document.getElementById(theIDs[i])) {
		
			ourSlideShows[theIDs[i]]=new SlideShow(theIDs[i],ourSlideShows[theIDs[i]]);
		
		} else {
		
			if (console.log) {
		
				console.log("Warning: Missing SlideShow div " + theIDs[i]);
		
			}
		
		}
		
	}
	
}

	
/* 

http://jaketrent.com/post/addremove-classes-raw-javascript/

*/

function hasClass(ele,cls) {

	if (ele.className) {

	  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));

	} else {

		return false;

	}

}

function addClass(ele,cls) {
	
	if (ele.className) {
		
	  if (!hasClass(ele,cls)) ele.className += " "+cls;

	} else {
		
		ele.className=cls;
	
	}
	
}

function removeClass(ele,cls) {
	
	if (ele.className) {
		
		if (hasClass(ele,cls)) {
		   var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		   ele.className=ele.className.replace(reg,' ');
	  	}
	  	 
  	} else {
  	
	  	return;
  	
	}
	
}


/* is element visible? in pure JS */

function isElementInViewport (el) {

	try{
		var rect = el.getBoundingClientRect();
		
		return (
			rect.top + (rect.height / 2 )  >= 0 &&
			rect.bottom - (rect.height / 2 )  <= (window.innerHeight || document.documentElement.clientHeight)
		);
	} catch (err) {
	
		return false;
	
	}

}


/* Wait until jQuery is available. */

function waitForJQuery() {

	if (window.jQuery) {
		
		$(document).ready(function() {
		  
			window.currentAdIndex=0;
			prepareIncludes();
			prepareDrawers();
			prepareAds();
			prepareSlideShows();
			
			$(window).scroll(prepareAds);
			
		});
		
	} else {
		
		setTimeout(waitForJQuery,50);

	}
	
}


/* Functions that don't need jQuery: */

prepareOverlay();

/* Functions that do: */

waitForJQuery();

loadStyleSheet("//fonts.ngeo.com/hoefler/1-0-1/hco_fonts.css");

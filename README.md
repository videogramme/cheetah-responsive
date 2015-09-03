# cheetah-responsive

[Jira ticket.
](https://jira.nationalgeographic.com/browse/DP-501
)
## Repository Directory

* c/ - CSS 
* i/ - Images (for examples, gallery icons)
* j/ - JavaScript

## Build/Deploy Requirements

* SASS interpreter, such as the Mac app Koala
* Upload access to NGM Static server - this lives in /dev/supercheetah/

## Usage Instructions

Add this code to your Cheetah article's data XML:

`<link rel="stylesheet" href="https://fonts.ngeo.com/hoefler/1-0-1/hco_fonts.css">
<link rel="stylesheet" href="/dev/supercheetah/c/cheetah-responsive.min.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1">`

Now you can code it as usual.

### Adding Extra Images

### Adding Pull Quotes


	<div class="width-wider quote">"It’s a project for a generation, it’s going to take till 2040 or 2050, and it’s hard."</div>

### Size Options for Media Elements

* width-inset: a small inset.
* width-text: the width of the text well.
* width-wider: a little wider than the text well.
* width-full: a very large image.
* width-cinematic: edge-to-edge.


## Advanced Usage

### Inline Galleries

We can include galleries using Joel Fiser's SlideShow.js (used in ISP projects). 

* Include jQuery at the very top:

		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

* Also include these extra tags (will be trimmed/concatenated soon):

		<script src="/dev/supercheetah/j/TweenLite.min.js"></script>
		<script src="/dev/supercheetah/j/CSSPlugin.min.js"></script>
		<script src="/dev/supercheetah/j/EasePack.min.js"></script>
		<script src="/dev/supercheetah/j/hammer.min.js"></script>    
		<script>
		function buildGalleries() {
			var slideShow1 = new SlideShow("slideShow1Div", "/dev/supercheetah/i/examples/masks.json");
		}
		function defer() {
		    if (window.jQuery) {
        		window.jQuery.getScript("/dev/supercheetah/j/jquery.focuspoint.min.js");
				window.jQuery.getScript("/dev/supercheetah/j/jquery.dfp.min.js");
				window.jQuery.getScript("/dev/supercheetah/j/SlideShow.min.js",buildGalleries);
			    
			} else {
		        setTimeout(defer, 50);
			}
		}
		defer();
		</script>
		<script src="/dev/supercheetah/j/Draggable.min.js"></script>    
		<script src="/dev/supercheetah/j/blockadblock.min.js"></script>    
		<link rel="stylesheet" href="/dev/supercheetah/c/inlineSlideShow.min.css" type="text/css" media="screen" />


* Add this code to the desired location--change the ID in both places from "slideShow1Div" if you use more than one:

     
     	<div id="slideShow1Div" class="inlineSlideShow">
	
	    	<script>$(document).ready(
	 	   		function() {
	    	
	 		   		// Change this path to your JSON.
	    		
	    			var slideShow1 = new SlideShow("slideShow1Div", "/dev/supercheetah/i/examples/masks.json");
	    		
	   			} ) ;
	    	</script>
		</div>

	

### Embedded Autoplaying "Textural" Videos

* Include jQuery at the very top:

		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
		
* Also include this script:

		<script src="//assets.nationalgeographic.com/modules-video/build/video.min.js"></script>
		
* At the desired point in your story, add the code:

			<div class="width-cinematic video">
				<div id="inlinePlayer01" class="inline ngs-video"
				    data-instance="inlinePlayer01"
				    data-type="textural"
				    data-guid="1d27f0cf-8b5b-44eb-865f-3093e64643ca"
				    data-account="2423130747">
				</div>
			</div>
			
* Change the GUID to thePlatform's GUID for your video.


### Additional Ads

### Promo Drawers

I'm working on a better way to place this consistently across the articles.

* Include jQuery at the very top:

		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
		
* Also include this script:

		<script src="/dev/supercheetah/j/supercheetah.min.js"></script>

* Add this code:

	        <div class="promo-content box width-inset">
	        	<h1>Climate change is real.</h1>
	        	<p>No kiddin'. </p>
	        	
		        <div class="drawer"><div class="header"><a href="#"></a><p> How do we know it's happening?</p>
		        </div>
		        			        	
			    <div class="contents"><ul><li><a href="http://google.com">Google it bro</a></li><li><a href="http://google.com">No really google it</a></li></ul></div>
			    
		        </div>
		        <div class="drawer"><div class="header"><a href="#"></a><p> What can we do about it?</p>
		        </div>
		        		        
			    <div class="contents"><ul><li><a href="http://google.com">Pray for death</a></li><li><a href="http://google.com">Stop driving</a></li></ul></div>
			    
		        </div>

			</div>


### Promo Stack

			<div class="promo-content">
				<h5>More From the Climate Change Special Issue</h5>

				<img src="/2015/09/chameleons/img/chameleons-graphic-160.jpg" />
				<a href="/">Gallery: Click here for really cool ish</a>
				<p>This is descriptive text telling the visitor how cool and what ish is in the extra cool ish link and how it is going to change their lives immeasurably if they only click on the link.</p>

				<hr/>

				<img src="/2015/09/chameleons/img/chameleons-graphic-160.jpg" />
				<a href="/">Gallery: Click here for really cool ish</a>
				<p >This is descriptive text telling the visitor how cool and what ish is in the extra cool ish link and how it is going to change their lives immeasurably if they only click on the link.</p>

				<hr/>

				<h6>Still More Climate Change Ish: Can You Believe That Ish?</h6>

				<a href="/">Gallery: Click here for really cool ish</a>
				<p>This is descriptive text telling the visitor how cool and what ish is in the extra cool ish link and how it is going to change their lives immeasurably if they only click on the link.</p>

				<a href="/">Gallery: Click here for really cool ish</a>
				<p>This is descriptive text telling the visitor how cool and what ish is in the extra cool ish link and how it is going to change their lives immeasurably if they only click on the link.</p>

				<a href="/">Gallery: Click here for really cool ish</a>
				<p>This is descriptive text telling the visitor how cool and what ish is in the extra cool ish link and how it is going to change their lives immeasurably if they only click on the link.</p>
			</div>
			
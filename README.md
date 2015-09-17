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
* Minify JS/CSS with Koala or similar
* Use fakegulp.sh or another method to concatenate the JS files into app.js


## Usage Instructions

Add this code to your Cheetah article's data XML:

		<link rel="stylesheet" href="https://fonts.ngeo.com/hoefler/1-0-1/hco_fonts.css">
		<link rel="stylesheet" href="/dev/supercheetah-dev/c/cheetah-responsive.min.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1">
		<script src="/dev/supercheetah/j/app.min.js"></script>
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

		<script>
		
		window.ourSlideShows = { "slideShow1Div" : "/dev/supercheetah-dev/i/examples/masks.json", 
			"slideShow2Div" : "/dev/supercheetah-dev/i/examples/masks.json" };
		
		document.createElement("picture");
		
		</script>


Now you can code it as usual.

### Adding Extra Images

Use this code to add each picture to your article:

	<div class="photo width-text">

		<img class="lazyload" 
		srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
		src="img/image1_640.jpg" 
		alt="Picture of TK TK TK">

		<div class="caption">Caption TK 
			<span class="credit">Photograph by TK</span>
		</div>
		
	</div>

You can change the dimensions of the image versions--just make sure it is updated throughout the code.


### Adding Pull Quotes


	<div class="width-wider quote">"It’s a project for a generation, it’s going to take till 2040 or 2050, and it’s hard."</div>


### Adding Contributors' Notes

	<p class="bio">"I'm so happy to be a contributor," said a contributor. "And that this story is built in literally the most beautiful webpage I've ever seen."</p>

### Size Options for Media Elements

* width-inset: a small inset.
* width-text: the width of the text well.
* width-wider: a little wider than the text well.
* width-full: a very large image.
* width-cinematic: edge-to-edge.


## Advanced Usage

### Inline Galleries


This part of the cheetah-responsive loader specifies galleries:

		window.ourSlideShows = { "slideShow1Div" : "/dev/supercheetah-dev/i/examples/masks.json", 
			"slideShow2Div" : "/2015/11/climate-change/germany-gallery.json" };
		
Assemble a JSON file with your gallery, using the ISP gallery syntax for SlideShow.js. Then add a `<div>` to the article XML:

	<div id="slideShow1Div" class="inlineSlideShow width-inset"> 
	</div>

Make sure that the ID specified in `id="slideShow1Div"` matches what you use in the cheetah-responsive loader. The actual value of the ID doesn't matter--just that it matches in both places.	

Note that you can customize the size by changing `width-inset`.

The JSON will need to be uploaded along with your images. You'll need to generate three sizes of images for the galleries: 640, 1536, and 2048px wide.

It should now accept images with varying aspect ratios.

### Embedded Autoplaying "Textural" Videos
		
* At the desired point in your story, add the code:

			<div class="width-cinematic video">
				<div id="inlinePlayer01" class="inline ngs-video"
				    data-instance="inlinePlayer01"
				    data-type="textural"
				    data-guid="1d27f0cf-8b5b-44eb-865f-3093e64643ca"
				    data-account="2423130747">
				</div>
			</div>
			<script src="//assets.nationalgeographic.com/modules-video/build/video.min.js"></script>
			
* Change the GUID to thePlatform's GUID for your video.


### Additional Ads

Here's the code for each size. Place them where you like. You can add `float-left` or `float-right` to the `<div>` classes to make them float.

When you have more than one ad of a certain size, you must increase the number at the end of the ID by one.

For example, in this code:

	<!-- /2994/ng.ngm/climate-change -->
	<div id='div-gpt-ad-1441209663586-0' class="adunit ad-unit-728">
	</div>
	
Change `div-gpt-ad-1441209663586-0` to `div-gpt-ad-1441209663586-1` for the second ad, and so on.
	
728x90 or 320x50, depending on your platform: 
	
	<!-- /2994/ng.ngm/climate-change -->
	<div id='div-gpt-ad-1441209663586-0' class="adunit ad-unit-728">
	</div>

300x250:
	
	<!-- /2994/ng.ngm/climate-change -->
	<div id='div-gpt-ad-1441051318676-0' class="ad-unit-300 adunit float-right">
	</div>

210x50 sponsor logo (please place on all pages near the top—will usually load blank)

	<!-- /2994/ng.ngm/climate-change -->
	<div id='div-gpt-ad-1441209708843-0' class="adunit ad-unit-210">
	</div>
	
	

### Removing the Leaderboard

In the package config XML, replace the ad block with:

		<object type="ad">
			<height>90</height>
			<width>728</width>
			<label>0</label>
			<adfile>/ads/ngmLeader-remover.html</adfile>
		</object>

This is Advertising-approved and is best for the page and our readers.
		
### Promo Tiles

	<a href="/link/">
		<div class="promo-tile box">
				<img src="/2015/11/promo-images/img/06-motorcycle-repair-2048.jpg"> <div>
				<h5>Promote the Channel</h5>
				<p>Here is the descriptive text for promoting the Explorer site for the Channel.</p>
		</div>
	</div></a>
		
### Promo Drawers

* Add this code where you want the box to appear:

		<div class="promo-series box-yellow width-box float-right include" data-include="/2015/11/promo-series-climate-change.html" />



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
			
			
			
### Cinematic Introductions

Make a photo container per usual, and add class `overlay-title-here`. 

			<div class="width-full photo overlay-title-here">
				<img src="/2015/11/germany/img/01-windmills-990.jpg" alt="Picture of an abandoned nuclear power plant" style="">
			</div> 
			
Anything with the class `.title` will be moved to a `.overlay` div inside it after page load.


### Adding Comments

Here's the code. You'll need to update a number of variables in here, details to come.

			<!-- Livefyre -->

	        <link rel="stylesheet" type="text/css" href="//assets.nationalgeographic.com/modules-livefyre/css/ng_livefyre.css">
	        <link rel="stylesheet" href="//assets.nationalgeographic.com/modules-livefyre/css/styles.css" media="screen">

	        <script>
	            var memFragConfig = {
	                // STAGING SETTINGS
	                mmdbHost: 'https://mmdb.nationalgeographic.com',
	                memcenHost: 'https://members.nationalgeographic.com',
	                notificationsHost: 'https://notifications.nationalgeographic.com',
	                notificationsKey: 'e6c4b4af844c454fc2110a4d09828559489837313bd2e519cf',
	                staticMedia: '//assets.nationalgeographic.com/ngs-header/',

	                // headerContainer: '.identity_bar',
	                force_desktop: false,
	                show_app_switcher: false,
	                crossDomain: true,

	                noSSL: false,

	                refreshOnLogin: true,
	                refreshOnLogout: true,
	                serverSideLogin: false,

	                debug: false,
	                debug_lvl: 5,

	                whitelist: {
	                    origins: [
	                        '*.nationalgeographic.com',
	                        '*.natgeo.vm',
	                        'localhost'
	                    ],
	                    targets: [
	                        'mmdb',
	                        'mc',
	                        'geodata'
	                    ]
	                },
	                alertContainerSelector: '#dialog-alert'
	            };

	            if (typeof livefyreConfig === 'undefined') {
	                var livefyreConfig = {
	                    "global" : {
	                        "network": "natgeo.fyre.co"
	                    },
	                    "streams": [{
	                        "siteId": 331108,
	                        "articleId": "cheetah-responsive-test",
	                        "el": "livefyre",
	                        "collectionMeta": "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJ0aXRsZSI6IkNoZWV0YWggUmVzcG9uc2l2ZSBUZXN0IiwidXJsIjoiaHR0cDpcL1wvbmdtLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb21cLyIsInRhZ3MiOiIiLCJjaGVja3N1bSI6ImZiMTcwOTc2ZDk0MTYxODQ5YjUzOGY5OTViMmEwOTM5IiwiYXJ0aWNsZUlkIjoiY2hlZXRhaC1yZXNwb25zaXZlLXRlc3QifQ.twQSSjBDxy4JK_szh6ExMgfA7mLFZj0BDa1ERVY67nw",
	                        "checksum": "fb170976d94161849b538f995b2a0939",
	                        "signed": true
	                    }]
	                }
	            }
	        </script>

	        <script src="//cdn.livefyre.com/libs/fyre.conv.load.js"></script>
	        <script src="//assets.nationalgeographic.com/modules-livefyre/build/modules-livefyre.min.js"></script>
	        
	        <div id='livefyre'></div>
	        <script>
	            _M.ready(function(core) {
	                window.livefyreManager = new LivefyreManager(core);
	            });
	        </script>

			<!-- END Livefyre  -->




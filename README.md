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
* Use fakegulp.sh or another method to concatenate the JS files into app.js
* Minify JS/CSS with Koala or similar

## Included JS Libraries 

* jQuery 
* SlideShow.js
* Hammer
* Picturefill
* Lazysizes
* TweenLite

## How to Use This Template


You can grab the skeleton XML file set in the `x` folder and start from there.

Or, if you prefer to go from scratch or are altering an existing Cheetah article, follow these directions:

Add this code to your Cheetah article's data XML:
	
	<link rel="stylesheet" href="/dev/supercheetah/c/cheetah-responsive.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1">
	<script src="/dev/supercheetah/j/app.min.js"></script>
	<script src="/dev/supercheetah/j/jquery-1.11.3.min.js"></script>
	
	<script>
		window.ourSlideShows = { 
				"slideShow1Div" : "/dev/supercheetah/i/examples/germany.json", 
				"slideShow2Div" : "/dev/supercheetah/i/examples/germany.json" 
				};	
				
		// window.ourAdSlotTop="/2994/whatever-it-is";
		// window.ourAdSlotMiddle="/2994/whatever-it-is";
	
	</script>

Find the social section and [replace it with this](#updating-social-buttons).

Add the [comments code.](#adding-comments) 

Add the [ad placements](#additional-ads), including a 210x50 in case we get sponsored.

In the Cheetah folder's config XML, find the advertising section and [update this tag](#removing-the-leaderboard).


Now you can code it as usual. The following sections show you how to add additional media.


### Breadcrumb Nav

#### Standard Magazine Issues

Here's the latest design-approved link style:

	<h4 class="title">
		<a style="border-bottom:0 none;" href="http://ngm.com">Magazine</a>&nbsp;&nbsp;|&nbsp;&nbsp;January 2016
	</h4>

#### Climate Change Issue

Depending on which question your story addresses, add one of these to your `article_title`:

	<!--#INCLUDE VIRTUAL="/2015/11/breadcrumbs-q1.html"-->

	<!--#INCLUDE VIRTUAL="/2015/11/breadcrumbs-q2.html"-->

	<!--#INCLUDE VIRTUAL="/2015/11/breadcrumbs-q3.html"-->
	
### "Issue Promo"

Add a box with text over a croppable image like this:

				<div class="photo width-cinematic promo-issue">
					<a href="LINK">
							<div class="overlay">
								<h3>TAG</h3>
								<h1>Giant Headline</h1>
								<h3>A National Geographic Magazine special series on TK TK TK.</h3>
								<span class="button">Read More</span>
							</div>
					</a>
					<img src="/2015/11/promo-images/img/bluemarble_2014090_xlrg_640.jpg"  class="lazyload" 
						srcset="/2015/11/promo-images/img/bluemarble_2014090_xlrg_2048.jpg 2048w, /2015/11/promo-images/img/bluemarble_2014090_xlrg_1080.jpg 1080w, /2015/11/promo-images/img/bluemarble_2014090_xlrg_640.jpg 640w" alt="Picture of Earth">
				</div>
				

Or add the prebuilt Climate Change issue promo this way:

			<!--#INCLUDE VIRTUAL="/2015/11/promo-issue.html"-->

### Adding Byline

In addition to the standard Cheetah tags, specify your bylines in the article body like this:

		<div class="author">Story by <strong>a writer</strong></div>
		<div class="author">Photographs by <strong>a photographer</strong></div>

### Adding Extra Images

Use this code to add each picture to your article:

	<div class="photo width-text">

		<img class="lazyload" 
		data-srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
		src="img/image1_640.jpg" 
		alt="Picture of TK TK TK">

		<p class="caption">Caption TK 
			<span class="credit">Photograph by TK</span>
		</p>
		
	</div>

You can change the dimensions of the image versions--just make sure it is updated throughout the code.

The larger image sizes will be lazy loaded. You could lazy load the small image size too by changing `src` to `data-src`, but this will cause viewers without JavaScript to see a blank spot instead of an image.


### Adding Pull Quotes


	<div class="width-wider quote">"It’s a project for a generation, it’s going to take till 2040 or 2050, and it’s hard."</div>
	
You can change the `width-wider` class to any of the standard size options (see below). Or add a `float-left` to make it float. 


### Adding Contributors' Notes

	<p class="bio">"I'm so happy to be a contributor," said a contributor. "And that this story is built in literally the most beautiful webpage I've ever seen."</p>

### Size Options for Media Elements

* `width-margin-element`: the smallest size, designed to fit in large screen margins.
* `width-locator`: smaller still, for locator maps.
* `width-inset`: a small inset.
* `width-text`: the width of the text well.
* `width-wide`: a little bit wider than the text well.
* `width-wider`: a good bit wider than the text well.
* `width-full`: a very large image.
* `width-cinematic`: edge-to-edge.

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

### Embedded Regular NG Video

	<div class="width-text video ratio-defined loop" >
		<div style=" display: inline-block;position: relative;width: 100%;">
		<div class="aspect-ratio-spacer" style="padding-top:56.5%;width:100%;height:1px">&nbsp;</div>
			<div class="aspect-ratio-element" style=" position: absolute; top: 0; bottom: 0; left: 0; right: 0 ">
				<iframe width="100%" height="100%" style="width:100%;height:100%;" src="//assets.nationalgeographic.com/modules-video/assets/ngsEmbeddedVideo.html?guid=00000150-381a-d9fe-abf5-be3bb0100001" frameborder="0" allowfullscreen="" seamless=""></iframe>
			</div>
		</div>
		<p class="caption">Caption TK <span class="credit">Video by TK TK</span></p>
	</div>
	
	
### Embedded Autoplaying "Textural" Videos
		
* At the desired point in your story, add the code:

			<div class="width-cinematic video">
				<div id="inlinePlayer01" class="inline ngs-video"
				    data-instance="inlinePlayer01"
				    data-type="textural"
				    data-guid="1d27f0cf-8b5b-44eb-865f-3093e64643ca"
				    data-account="2389942702">
				</div>
			</div>
			<script src="//assets.nationalgeographic.com/modules-video/build/video.min.js"></script>
			
* Change the GUID to thePlatform's GUID for your video.

* If you have more than one video in the page, change both instances of "inlinePlayer01" to something unique. Anything's fine.

* This account ID is for the NGM MPX account, but you may need to pull in a video from the NGS MPX. If so, change the `data-account` variable.
	* NGS: `2423130747`
	* NGM: `2389942702`



### Updating Social Buttons

This updated code includes Google+ and LinkedIn; it goes in your data XML, replacing any previous code:

			<!-- this is share code, you need to fill in the counturl and url values -->
			<div class="share-buttons">
				<div class="addthis_toolbox">
					<a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
					<a class="addthis_button_tweet" tw:text="HEADLINE" tw:url="SHORT URL" tw:counturl="LONG LIVE URL" tw:hashtags="" tw:via="NatGeoMag"></a>
					<a class="addthis_button_linkedin_counter"></a> 
					<a class="addthis_button_google_plusone" g:plusone:size="medium"></a>
					
					<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js#username=ng-dmg"></script>
				</div>
			</div>
 

### Setting the Ad Tags

There is some automatic ad tag detection logic. Currently:

* if `climate` is in the URL, `/2994/ng.ngm/climate-change` is used for the first ad slot of each type and `/2994/ng.ngm/ng2_climate-change` for subsequent tags

* ditto: `animal` => `/2994/ng.ngm/animals_rotation`, `/2994/ng.ngm/ng2_animals_rotation` 

* ditto: `explore` => `/2994/ng.ngm/explorer`, `/2994/ng.ngm/ng2_explorer` 

* ditto: `travel` => `/2994/ng.ngm/travel_rotation`, `/2994/ng.ngm/ng2_travel_rotation` 

* ditto: `science` => `/2994/ng.ngm/science_rotation`, `/2994/ng.ngm/ng2_science_rotation` 

If you need to use a different tag, add this code in to the `<script>` tag of the SuperCheetah initialization code, right next to the `window.ourSlideShows` line:


	window.ourAdSlotTop="/2994/whatever-it-is";
	window.ourAdSlotMiddle="/2994/whatever-it-is";




### Adding Each Ad

Here's the code for each size. Place them where you like. You can add `float-left` or `float-right` to the `<div>` classes to make them float.

When you have more than one ad of a certain size, each ad will need a unique ID. It doesn't matter what it is. This isn't the same as an ad slot identifier... see above how to change that.

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

This is Advertising-approved and is best for the page and our readers. You can do it at the issue level.
		
### Promo Tiles

	<a href="/link/">
		<div class="promo-tile box">
				<img class="lazyload" 
				srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
				src="img/image1_640.jpg" 
				alt="Picture of TK TK TK"> 
				<div>
				<h5>Promote the Channel</h5>
				<p>Here is the descriptive text for promoting the Explorer site for the Channel.</p>
		</div>
	</div></a>
	
To make it a promo for the Explorer show, add the class `explorer`:

	<a href="/link/">
		<div class="promo-tile box explorer">
				<img class="lazyload" 
				srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
				src="img/image1_640.jpg" 
				alt="Picture of TK TK TK"> 
				<div>
				<h5>Promote the Channel</h5>
				<p>Here is the descriptive text for promoting the Explorer site for the Channel.</p>
		</div>
	</div></a>

### Next/Previous

Previous:

			<a href="/" class="promo-previous">
				<img class="lazyload" 
				data-srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
				data-src="img/image1_640.jpg" sizes="(min-width: 1024px) calc((100vw - 50rem) / 2), 1px" 
				alt="Picture of TK TK TK">
				<h2>Introduction story Long Heddy Hed Headline</h2>
			</a>

and Next:

			<a href="/" class="promo-next">
				<img class="lazyload" 
				data-srcset="img/image1_2048.jpg 2048w, img/image1_1024.jpg 1024w, img/image1_640.jpg 640w" 
				data-src="img/image1_640.jpg" sizes="(min-width: 1024px) calc((100vw - 50rem) / 2), 1px" 
				alt="Picture of TK TK TK">
				<h2>Introduction story Long Heddy Hed Headline</h2>
			</a>

Place these partway through your story. On mobile, Previous will disappear, and Next will fold into the text--at the point you inserted it. (The goal is to catch people who would otherwise leave the page out of boredom.)

The image size is 480x320px.


### Promo Thumbs

On a large screen, all three will appear. On smaller screens, only the first two will show up.

				<div class="promo-thumbs">

					
					<h3>More on Subject</h3>
					
					<div class="promo-thumb">
						<a href="">
							<img>
							<h4>Subtitle</h4>
							<h3>Headline</h3>
						</a>
					</div>
					<div class="promo-thumb">
						<a href="">
							<img>
							<h4>Subtitle</h4>
							<h3>Headline</h3>
						</a>
					</div>
					<div class="promo-thumb">
						<a href="">
							<img>
							<h4>Subtitle</h4>
							<h3>Headline</h3>
						</a>
					</div>
				</div>
				
				 

### Old-Style Promo Stack

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

Here's the code. You'll need to update a number of variables in here.

```html
			<!-- Livefyre -->

	        <link rel="stylesheet" type="text/css" href="//assets.nationalgeographic.com/modules-livefyre/css/ng_livefyre.css">
	        <link rel="stylesheet" href="//assets.nationalgeographic.com/modules-livefyre/css/styles.css" media="screen">

	        <script>
	            var memFragConfig = { 
	                mmdbHost: 'https://mmdb.nationalgeographic.com',
	                memcenHost: 'https://members.nationalgeographic.com',
	                notificationsHost: 'https://notifications.nationalgeographic.com',
	                notificationsKey: 'e6c4b4af844c454fc2110a4d09828559489837313bd2e519cf',
	                staticMedia: '//assets.nationalgeographic.com/ngs-header/',
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
	                        "articleId": "cheetah-responsive-test-2",
	                        "el": "livefyre",
	                        "collectionMeta": "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJ0aXRsZSI6IkNoZWV0YWggUmVzcG9uc2l2ZSBUZXN0IiwidXJsIjoiaHR0cDpcL1wvbmdtLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb21cLzIwMTVcLzExXC9nZXJtYW55XC9rdW56aWctdGV4dCIsInRhZ3MiOiIiLCJjaGVja3N1bSI6IjRhYWVlNmFlYTE4MTI5ZDZhOWExOTk3MjBlY2RiYTE5IiwiYXJ0aWNsZUlkIjoiY2hlZXRhaC1yZXNwb25zaXZlLXRlc3QtMiJ9.I-Vu0kZE6XiYPwq5s2L59XmyEdWJoTtUqT1Gkla2wzA",
	                        "checksum": "4aaee6aea18129d6a9a199720ecdba19",
	                        "signed": true
	                    }]
	                }
	            }
	        </script>

	        <script src="//cdn.livefyre.com/libs/fyre.conv.load.js"></script>
	        <script src="//assets.nationalgeographic.com/modules-livefyre/build/modules-livefyre.min.js"></script>
	        

	        <div id='livefyre'><h2 class="status-comments-loading">Loading comments...</h2></div>
	        <script>
	            _M.ready(function(core) {
	                window.livefyreManager = new LivefyreManager(core);
	                $(".status-comments-loading").remove();
	            });
	        </script>

			<!-- END Livefyre  -->
```

After you've added the code to the page in the place where you wish the comments to appear, [go here](http://ssosandbox.livefyre.com/ssosandbox/lf_sandbox_site/integration/CollectionMetaHelper.php?network=natgeo.fyre.co&siteId=331108&siteKey=GjiofN4YqnARccRbccDQsDMofxE%3D&contentId=cheetah-responsive-test-2&contentTitle=Cheetah+Responsive+Test&contentUrl=http%3A%2F%2Fngm.nationalgeographic.com%2F2015%2F11%2Fgermany%2Fkunzig-text&contentTags=&targetElement=livefyre). 

Change the "Content Id" to something that will always be unique--for example, `2015/11/germany-kunzig-text`. 

Change the "Content Title" to your headline. 

- NOTE: If it includes apostrophes, you must replace them with `&rsquo;` 
- NOTE2: can't be changed later, so err on the side of caution (and copy-editing).

Change the "Content URL" to your final, live URL.

Hit the `Do Stuff!` button.

It will spit out lots of code. On the right, look in the "JWT Signed blah blah" section.

Pick out the `collectionMeta` attribute. Copy its value--multiple lines of crap--without the double quotes around it. 

Paste that value into the `collectionMeta` part of the embed code that you added into the page.

Do this again with the `checksum`. 

Do it with `articleId` too, but just copy in the same value you entered into the wizard.

HOORAY! You're finally done!

If you need more documentation, check out the [modules-livefyre documentation](https://github.com/natgeo/modules-livefyre). (If that's a 404, you don't have access--request it through Jira.)



### Show/Hide Per Screen Size

You can apply these classes to show or hide tags, depending on screen size:

`display-small`

`display-medium`

`display-large`

`display-no-small` or `hide-small`

`display-no-large` or `hide-large`



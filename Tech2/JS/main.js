// JavaScript Document
var interval = setInterval(function(){slideBar()}, 5);

// U-Bar variables
var slideTriggerLeft = false;
var slideTriggerRight = false;
var ubarStartX = 0;
var ubarX = 0;
var ubarWidth = 1565;
var tooLeft = false;
var tooRight = false;

// Scoreboard variables
var scoreSlideTriggerLeft = false;
var scoreSlideTriggerRight = false;
var scoreStartX = 0;
var scoreX = 0;
var scoreWidth = 1664;
var scoreTooLeft = false;
var scoreTooRight = false;

// Top Stories variables
var storiesSlideTriggerLeft = false;
var storiesSlideTriggerRight = false;
var storiesStartX = 0;
var storiesX = 0;
var storiesWidth = 2270;
var storiesTooLeft = false;
var storiesTooRight = false;

// Headlines variables
var headlinesSlideTriggerLeft = false;
var headlinesSlideTriggerRight = false;
var headlinesStartX = 0;
var headlinesX = 0;
var headlinesWidth = 1250;
var headlinesTooLeft = false;
var headlinesTooRight = false;

// Top Videos variables
var topvideosSlideTriggerLeft = false;
var topvideosSlideTriggerRight = false;
var topvideosStartX = 0;
var topvideosX = 0;
var topvideosWidth = 1700;
var topvideosTooLeft = false;
var topvideosTooRight = false;

// Slides bar if extra horizontal content is available.
function slideBar() {
	// U-Bar slide code.
	if (slideTriggerLeft || slideTriggerRight)
	{
	  ubarX = document.getElementById("ubarcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (ubarX >= ubarStartX)
	  {
		  tooLeft = true;
		  document.getElementById("ubarlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  tooLeft = false;	
		  document.getElementById("ubarlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (ubarX <= ubarStartX - 1565 + (window.innerWidth - 360))
	  {
		  tooRight = true;	
		  document.getElementById("ubarlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  tooRight = false;	
		  document.getElementById("ubarlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (slideTriggerLeft && !tooRight)
	  {
		  document.getElementById("ubarcontent").style.left = (ubarX - 3) + "px";
	  }
	  else if (slideTriggerRight && !tooLeft)
	  {
		  document.getElementById("ubarcontent").style.left = (ubarX + 3) + "px";
	  }
	}
	// Scoreboard slide code.
	if (scoreSlideTriggerLeft || scoreSlideTriggerRight)
	{
	  scoreX = document.getElementById("scoreboardcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (scoreX >= scoreStartX)
	  {
		  scoreTooLeft = true;
		  document.getElementById("scoreboardlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  scoreTooLeft = false;	
		  document.getElementById("scoreboardlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (scoreX <= scoreStartX - 1664 + (window.innerWidth - 360))
	  {
		  scoreTooRight = true;	
		  document.getElementById("scoreboardlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  scoreTooRight = false;	
		  document.getElementById("scoreboardlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (scoreSlideTriggerLeft && !scoreTooRight)
	  {
		  document.getElementById("scoreboardcontent").style.left = (scoreX - 3) + "px";
	  }
	  else if (scoreSlideTriggerRight && !scoreTooLeft)
	  {
		  document.getElementById("scoreboardcontent").style.left = (scoreX + 3) + "px";
	  }
	}
	// Top Stories slide code.
	if (storiesSlideTriggerLeft || storiesSlideTriggerRight)
	{
	  storiesX = document.getElementById("topstoriescontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (storiesX >= storiesStartX)
	  {
		  storiesTooLeft = true;
		  document.getElementById("topstorieslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  storiesTooLeft = false;	
		  document.getElementById("topstorieslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (storiesX <= storiesStartX - 2270 + (window.innerWidth - 360))
	  {
		  storiesTooRight = true;	
		  document.getElementById("topstorieslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  storiesTooRight = false;	
		  document.getElementById("topstorieslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (storiesSlideTriggerLeft && !storiesTooRight)
	  {
		  document.getElementById("topstoriescontent").style.left = (storiesX - 3) + "px";
	  }
	  else if (storiesSlideTriggerRight && !storiesTooLeft)
	  {
		  document.getElementById("topstoriescontent").style.left = (storiesX + 3) + "px";
	  }
	}
	// Headlines slide code.
	if (headlinesSlideTriggerLeft || headlinesSlideTriggerRight)
	{
	  headlinesX = document.getElementById("headlinescontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (headlinesX >= headlinesStartX)
	  {
		  headlinesTooLeft = true;
		  document.getElementById("headlineslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  headlinesTooLeft = false;	
		  document.getElementById("headlineslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (headlinesX <= headlinesStartX - 1250 + (window.innerWidth - 360))
	  {
		  headlinesTooRight = true;	
		  document.getElementById("headlineslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  headlinesTooRight = false;	
		  document.getElementById("headlineslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (headlinesSlideTriggerLeft && !headlinesTooRight)
	  {
		  document.getElementById("headlinescontent").style.left = (headlinesX - 3) + "px";
	  }
	  else if (headlinesSlideTriggerRight && !headlinesTooLeft)
	  {
		  document.getElementById("headlinescontent").style.left = (headlinesX + 3) + "px";
	  }
	}
	// Top Videos slide code.
	if (topvideosSlideTriggerLeft || topvideosSlideTriggerRight)
	{
	  topvideosX = document.getElementById("topvideoscontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (topvideosX >= topvideosStartX)
	  {
		  topvideosTooLeft = true;
		  document.getElementById("topvideoslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  topvideosTooLeft = false;	
		  document.getElementById("topvideoslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (topvideosX <= topvideosStartX - 1700 + (window.innerWidth - 360))
	  {
		  topvideosTooRight = true;	
		  document.getElementById("topvideoslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  topvideosTooRight = false;	
		  document.getElementById("topvideoslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (topvideosSlideTriggerLeft && !topvideosTooRight)
	  {
		  document.getElementById("topvideoscontent").style.left = (topvideosX - 3) + "px";
	  }
	  else if (topvideosSlideTriggerRight && !topvideosTooLeft)
	  {
		  document.getElementById("topvideoscontent").style.left = (topvideosX + 3) + "px";
	  }
	}
}

// Toggles the trigger which indicates when the bar should slide.
function toggleTrigger(key) {
	// Keys 0-3 are designated for moving the U-Bar.
	if (key == 0)
	{
		slideTriggerLeft = true;
	}
	else if (key == 1)
	{
		slideTriggerLeft = false;
	}
	else if (key == 2)
	{
		slideTriggerRight = true;
	}
	else if (key == 3)
	{
		slideTriggerRight = false;	
	}
	// Keys 4-7 are designated for moving the Scoreboard.
	else if (key == 4)
	{
		scoreSlideTriggerLeft = true;
	}
	else if (key == 5)
	{
		scoreSlideTriggerLeft = false;
	}
	else if (key == 6)
	{
		scoreSlideTriggerRight = true;
	}
	else if (key == 7)
	{
		scoreSlideTriggerRight = false;	
	}
	// Keys 8-11 are designated for moving the Top Stories.
	else if (key == 8)
	{
		storiesSlideTriggerLeft = true;
	}
	else if (key == 9)
	{
		storiesSlideTriggerLeft = false;
	}
	else if (key == 10)
	{
		storiesSlideTriggerRight = true;
	}
	else if (key == 11)
	{
		storiesSlideTriggerRight = false;	
	}
	// Keys 12-15 are designated for moving the Headlines.
	else if (key == 12)
	{
		headlinesSlideTriggerLeft = true;
	}
	else if (key == 13)
	{
		headlinesSlideTriggerLeft = false;
	}
	else if (key == 14)
	{
		headlinesSlideTriggerRight = true;
	}
	else if (key == 15)
	{
		headlinesSlideTriggerRight = false;	
	}
	// Keys 16-19 are designated for moving the Top Videos.
	else if (key == 16)
	{
		topvideosSlideTriggerLeft = true;
	}
	else if (key == 17)
	{
		topvideosSlideTriggerLeft = false;
	}
	else if (key == 18)
	{
		topvideosSlideTriggerRight = true;
	}
	else if (key == 19)
	{
		topvideosSlideTriggerRight = false;	
	}
}

// Adjusts all right-bound elements of the page upon resizing and page entry.
function adjustPage() {
	if (window.innerWidth >= 900)
	{
		document.getElementById("adjustabletopbar").style.left = (window.innerWidth - 612) + "px";	
		document.getElementById("adjustablenavigationbar").style.left = (window.innerWidth - 308) + "px";
	}
	else
	{
		document.getElementById("adjustabletopbar").style.left = "288px";	
		document.getElementById("adjustablenavigationbar").style.left = "592px";
	}
	document.getElementById("adjustablescoreboard").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableheadlines").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("ubarnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("ubarlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("topstoriesnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("topstorieslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("topvideosnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("topvideoslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	if (window.innerWidth >= 740)
	{
		document.getElementById("adjustablepollbar").style.left = ((window.innerWidth) / 2) - 370 + "px";	
	}
	else
	{
		document.getElementById("adjustablepollbar").style.left = "0px";	
	}
	if (window.innerWidth >= 678)
	{
		document.getElementById("adjustablebottombar").style.left = ((window.innerWidth) / 2) - 339 + "px";	
	}
	else
	{
		document.getElementById("adjustablebottombar").style.left = "0px";	
	}
	if (window.innerWidth >= 134)
	{
		document.getElementById("pagebartext").style.left = ((window.innerWidth) / 2) - 67 + "px";	
	}
	else
	{
		document.getElementById("pagebartext").style.left = "0px";	
	}
	//document.getElementById("ubarcorrection").style.left = (window.innerWidth - 90) + "px";	
}

// Finds the x-coordinate of the sliding bar when the page is first loaded.
function findBarOffset() {
	ubarStartX = document.getElementById("ubarcontent").offsetLeft;
	ubarX = ubarStartX;
	scoreStartX = document.getElementById("scoreboardcontent").offsetLeft;
	scoreX = scoreStartX;
	storiesStartX = document.getElementById("topstoriescontent").offsetLeft;
	storiesX = storiesStartX;
	headlinesStartX = document.getElementById("headlinescontent").offsetLeft;
	headlinesX = headlinesStartX;
	topvideosStartX = document.getElementById("topvideoscontent").offsetLeft;
	topvideosX = topvideosStartX;
}

// Brings appropriate light buttons to the front when page is loaded.
function adjustButtons() {
	tooLeft = true;
	document.getElementById("ubarlightbuttonright").style.zIndex = "3";
	scoreTooLeft = true;
	document.getElementById("scoreboardlightbuttonright").style.zIndex = "3";
	storiesTooLeft = true;
	document.getElementById("topstorieslightbuttonright").style.zIndex = "3";
	headlinesTooLeft = true;
	document.getElementById("headlineslightbuttonright").style.zIndex = "3";
	topvideosTooLeft = true;
	document.getElementById("topvideoslightbuttonright").style.zIndex = "3";
}

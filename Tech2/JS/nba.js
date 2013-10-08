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

// Score Board variables
var scoreboardSlideTriggerLeft = false;
var scoreboardSlideTriggerRight = false;
var scoreboardStartX = 0;
var scoreboardX = 0;
var scoreboardWidth = 558;
var scoreboardTooLeft = false;
var scoreboardTooRight = false;

// Top Stories variables
var topstoriesSlideTriggerLeft = false;
var topstoriesSlideTriggerRight = false;
var topstoriesStartX = 0;
var topstoriesX = 0;
var topstoriesWidth = 1130;
var topstoriesTooLeft = false;
var topstoriesTooRight = false;

// Headlines South variables
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
var topvideosWidth = 1130;
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
	// Score Board slide code.
	if (scoreboardSlideTriggerLeft || scoreboardSlideTriggerRight)
	{
	  scoreboardX = document.getElementById("scoreboardcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (scoreboardX >= scoreboardStartX)
	  {
		  scoreboardTooLeft = true;
		  document.getElementById("scoreboardlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  scoreboardTooLeft = false;	
		  document.getElementById("scoreboardlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (scoreboardX <= scoreboardStartX - 558 + (window.innerWidth - 360))
	  {
		  scoreboardTooRight = true;	
		  document.getElementById("scoreboardlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  scoreboardTooRight = false;	
		  document.getElementById("scoreboardlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (scoreboardSlideTriggerLeft && !scoreboardTooRight)
	  {
		  document.getElementById("scoreboardcontent").style.left = (scoreboardX - 3) + "px";
	  }
	  else if (scoreboardSlideTriggerRight && !scoreboardTooLeft)
	  {
		  document.getElementById("scoreboardcontent").style.left = (scoreboardX + 3) + "px";
	  }
	}
	// Top Stories slide code.
	if (topstoriesSlideTriggerLeft || topstoriesSlideTriggerRight)
	{
	  topstoriesX = document.getElementById("topstoriescontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (topstoriesX >= topstoriesStartX)
	  {
		  topstoriesTooLeft = true;
		  document.getElementById("topstorieslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  topstoriesTooLeft = false;	
		  document.getElementById("topstorieslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (topstoriesX <= topstoriesStartX - 1130 + (window.innerWidth - 360))
	  {
		  topstoriesTooRight = true;	
		  document.getElementById("topstorieslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  topstoriesTooRight = false;	
		  document.getElementById("topstorieslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (topstoriesSlideTriggerLeft && !topstoriesTooRight)
	  {
		  document.getElementById("topstoriescontent").style.left = (topstoriesX - 3) + "px";
	  }
	  else if (topstoriesSlideTriggerRight && !topstoriesTooLeft)
	  {
		  document.getElementById("topstoriescontent").style.left = (topstoriesX + 3) + "px";
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
	  if (topvideosX <= topvideosStartX - 1130 + (window.innerWidth - 360))
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
	// Keys 4-7 are designated for moving the AFC North bar.
	else if (key == 4)
	{
		scoreboardSlideTriggerLeft = true;
	}
	else if (key == 5)
	{
		scoreboardSlideTriggerLeft = false;
	}
	else if (key == 6)
	{
		scoreboardSlideTriggerRight = true;
	}
	else if (key == 7)
	{
		scoreboardSlideTriggerRight = false;	
	}
	// Keys 8-11 are designated for moving the NFC North bar.
	else if (key == 8)
	{
		topstoriesSlideTriggerLeft = true;
	}
	else if (key == 9)
	{
		topstoriesSlideTriggerLeft = false;
	}
	else if (key == 10)
	{
		topstoriesSlideTriggerRight = true;
	}
	else if (key == 11)
	{
		topstoriesSlideTriggerRight = false;	
	}
	// Keys 12-15 are designated for moving the AFC South bar.
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
	// Keys 16-19 are designated for moving the NFC South bar.
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
	if (window.innerWidth >= 1150)
	{
		document.getElementById("adjustabletopbar").style.left = (window.innerWidth - 612) + "px";	
		document.getElementById("adjustablenavspecificbar").style.left = (window.innerWidth - 336) + "px";
	}
	else
	{
		document.getElementById("adjustabletopbar").style.left = "538px";	
		document.getElementById("adjustablenavspecificbar").style.left = "814px";
	}
	document.getElementById("adjustablescoreboard").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableheadlines").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("ubarnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("ubarlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("topstoriesnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("topstorieslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("topvideosnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("topvideoslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	if (window.innerWidth >= 678)
	{
		document.getElementById("adjustablebottombar").style.left = ((window.innerWidth) / 2) - 339 + "px";	
	}
	else
	{
		document.getElementById("adjustablebottombar").style.left = "0px";	
	}
	if (window.innerWidth >= 820)
	{
		document.getElementById("pagebartext").style.left = ((window.innerWidth) / 2) - 410 + "px";	
	}
	else
	{
		document.getElementById("pagebartext").style.left = "0px";	
	}
	//document.getElementById("ubarcorrection").style.left = (window.innerWidth - 90) + "px";	
	adjustButtons();
}

// Finds the x-coordinate of the sliding bar when the page is first loaded.
function findBarOffset() {
	ubarStartX = document.getElementById("ubarcontent").offsetLeft;
	ubarX = ubarStartX;
	scoreboardStartX = document.getElementById("scoreboardcontent").offsetLeft;
	scoreboardX = scoreboardStartX;
	topstoriesStartX = document.getElementById("topstoriescontent").offsetLeft;
	topstoriesX = topstoriesStartX;
	headlinesStartX = document.getElementById("headlinescontent").offsetLeft;
	headlinesX = headlinesStartX;
	topvideosStartX = document.getElementById("topvideoscontent").offsetLeft;
	topvideosX = topvideosStartX;
}

// Brings appropriate light buttons to the front when page is loaded.
function adjustButtons() {
	if (ubarX >= ubarStartX)
	{
		tooLeft = true;
		document.getElementById("ubarlightbuttonright").style.zIndex = "3";
	}
	if (scoreboardX >= scoreboardStartX)
	{
		scoreboardTooLeft = true;
		document.getElementById("scoreboardlightbuttonright").style.zIndex = "3";
	}
	if (topstoriesX >= topstoriesStartX)
	{
		topstoriesTooLeft = true;
		document.getElementById("topstorieslightbuttonright").style.zIndex = "3";
	}
	if (headlinesX >= headlinesStartX)
	{
		headlinesTooLeft = true;
		document.getElementById("headlineslightbuttonright").style.zIndex = "3";
	}
	if (topvideosX >= topvideosStartX)
	{
		topvideosTooLeft = true;
		document.getElementById("topvideoslightbuttonright").style.zIndex = "3";
	}
	
	if (window.innerWidth >= 918)
	{
		scoreboardTooRight = true;
		document.getElementById("scoreboardlightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		scoreboardTooRight = false;
		document.getElementById("scoreboardlightbuttonleft").style.zIndex = "1";
	}
	if (window.innerWidth >= 1490)
	{
		topstoriesTooRight = true;
		document.getElementById("topstorieslightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		topstoriesTooRight = false;
		document.getElementById("topstorieslightbuttonleft").style.zIndex = "1";
	}
	if (window.innerWidth >= 1610)
	{
		headlinesTooRight = true;
		document.getElementById("headlineslightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		headlinesTooRight = false;
		document.getElementById("headlineslightbuttonleft").style.zIndex = "1";
	}
	if (window.innerWidth >= 1490)
	{
		topvideosTooRight = true;
		document.getElementById("topvideoslightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		topvideosTooRight = false;
		document.getElementById("topvideoslightbuttonleft").style.zIndex = "1";
	}
}
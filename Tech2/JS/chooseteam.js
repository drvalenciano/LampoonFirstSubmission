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

// AFC North variables
var afcNorthSlideTriggerLeft = false;
var afcNorthSlideTriggerRight = false;
var afcNorthStartX = 0;
var afcNorthX = 0;
var afcNorthWidth = 830;
var afcNorthTooLeft = false;
var afcNorthTooRight = false;

// NFC North variables
var nfcNorthSlideTriggerLeft = false;
var nfcNorthSlideTriggerRight = false;
var nfcNorthStartX = 0;
var nfcNorthX = 0;
var nfcNorthWidth = 830;
var nfcNorthTooLeft = false;
var nfcNorthTooRight = false;

// AFC South variables
var afcSouthSlideTriggerLeft = false;
var afcSouthSlideTriggerRight = false;
var afcSouthStartX = 0;
var afcSouthX = 0;
var afcSouthWidth = 830;
var afcSouthTooLeft = false;
var afcSouthTooRight = false;

// NFC South variables
var nfcSouthSlideTriggerLeft = false;
var nfcSouthSlideTriggerRight = false;
var nfcSouthStartX = 0;
var nfcSouthX = 0;
var nfcSouthWidth = 830;
var nfcSouthTooLeft = false;
var nfcSouthTooRight = false;

// AFC East variables
var afcEastSlideTriggerLeft = false;
var afcEastSlideTriggerRight = false;
var afcEastStartX = 0;
var afcEastX = 0;
var afcEastWidth = 830;
var afcEastTooLeft = false;
var afcEastTooRight = false;

// NFC East variables
var nfcEastSlideTriggerLeft = false;
var nfcEastSlideTriggerRight = false;
var nfcEastStartX = 0;
var nfcEastX = 0;
var nfcEastWidth = 830;
var nfcEastTooLeft = false;
var nfcEastTooRight = false;

// AFC West variables
var afcWestSlideTriggerLeft = false;
var afcWestSlideTriggerRight = false;
var afcWestStartX = 0;
var afcWestX = 0;
var afcWestWidth = 830;
var afcWestTooLeft = false;
var afcWestTooRight = false;

// NFC West variables
var nfcWestSlideTriggerLeft = false;
var nfcWestSlideTriggerRight = false;
var nfcWestStartX = 0;
var nfcWestX = 0;
var nfcWestWidth = 830;
var nfcWestTooLeft = false;
var nfcWestTooRight = false;

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
	// AFC North slide code.
	if (afcNorthSlideTriggerLeft || afcNorthSlideTriggerRight)
	{
	  afcNorthX = document.getElementById("afcNorthcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (afcNorthX >= afcNorthStartX)
	  {
		  afcNorthTooLeft = true;
		  document.getElementById("afcNorthlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  afcNorthTooLeft = false;	
		  document.getElementById("afcNorthlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (afcNorthX <= afcNorthStartX - 830 + (window.innerWidth - 360))
	  {
		  afcNorthTooRight = true;	
		  document.getElementById("afcNorthlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  afcNorthTooRight = false;	
		  document.getElementById("afcNorthlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (afcNorthSlideTriggerLeft && !afcNorthTooRight)
	  {
		  document.getElementById("afcNorthcontent").style.left = (afcNorthX - 3) + "px";
	  }
	  else if (afcNorthSlideTriggerRight && !afcNorthTooLeft)
	  {
		  document.getElementById("afcNorthcontent").style.left = (afcNorthX + 3) + "px";
	  }
	}
	// NFC North slide code.
	if (nfcNorthSlideTriggerLeft || nfcNorthSlideTriggerRight)
	{
	  nfcNorthX = document.getElementById("nfcNorthcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (nfcNorthX >= nfcNorthStartX)
	  {
		  nfcNorthTooLeft = true;
		  document.getElementById("nfcNorthlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  nfcNorthTooLeft = false;	
		  document.getElementById("nfcNorthlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (nfcNorthX <= nfcNorthStartX - 830 + (window.innerWidth - 360))
	  {
		  nfcNorthTooRight = true;	
		  document.getElementById("nfcNorthlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  nfcNorthTooRight = false;	
		  document.getElementById("nfcNorthlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (nfcNorthSlideTriggerLeft && !nfcNorthTooRight)
	  {
		  document.getElementById("nfcNorthcontent").style.left = (nfcNorthX - 3) + "px";
	  }
	  else if (nfcNorthSlideTriggerRight && !nfcNorthTooLeft)
	  {
		  document.getElementById("nfcNorthcontent").style.left = (nfcNorthX + 3) + "px";
	  }
	}
	// AFC South slide code.
	if (afcSouthSlideTriggerLeft || afcSouthSlideTriggerRight)
	{
	  afcSouthX = document.getElementById("afcSouthcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (afcSouthX >= afcSouthStartX)
	  {
		  afcSouthTooLeft = true;
		  document.getElementById("afcSouthlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  afcSouthTooLeft = false;	
		  document.getElementById("afcSouthlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (afcSouthX <= afcSouthStartX - 830 + (window.innerWidth - 360))
	  {
		  afcSouthTooRight = true;	
		  document.getElementById("afcSouthlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  afcSouthTooRight = false;	
		  document.getElementById("afcSouthlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (afcSouthSlideTriggerLeft && !afcSouthTooRight)
	  {
		  document.getElementById("afcSouthcontent").style.left = (afcSouthX - 3) + "px";
	  }
	  else if (afcSouthSlideTriggerRight && !afcSouthTooLeft)
	  {
		  document.getElementById("afcSouthcontent").style.left = (afcSouthX + 3) + "px";
	  }
	}
	// NFC South slide code.
	if (nfcSouthSlideTriggerLeft || nfcSouthSlideTriggerRight)
	{
	  nfcSouthX = document.getElementById("nfcSouthcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (nfcSouthX >= nfcSouthStartX)
	  {
		  nfcSouthTooLeft = true;
		  document.getElementById("nfcSouthlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  nfcSouthTooLeft = false;	
		  document.getElementById("nfcSouthlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (nfcSouthX <= nfcSouthStartX - 830 + (window.innerWidth - 360))
	  {
		  nfcSouthTooRight = true;	
		  document.getElementById("nfcSouthlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  nfcSouthTooRight = false;	
		  document.getElementById("nfcSouthlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (nfcSouthSlideTriggerLeft && !nfcSouthTooRight)
	  {
		  document.getElementById("nfcSouthcontent").style.left = (nfcSouthX - 3) + "px";
	  }
	  else if (nfcSouthSlideTriggerRight && !nfcSouthTooLeft)
	  {
		  document.getElementById("nfcSouthcontent").style.left = (nfcSouthX + 3) + "px";
	  }
	}
	// AFC East slide code.
	if (afcEastSlideTriggerLeft || afcEastSlideTriggerRight)
	{
	  afcEastX = document.getElementById("afcEastcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (afcEastX >= afcEastStartX)
	  {
		  afcEastTooLeft = true;
		  document.getElementById("afcEastlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  afcEastTooLeft = false;	
		  document.getElementById("afcEastlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (afcEastX <= afcEastStartX - 830 + (window.innerWidth - 360))
	  {
		  afcEastTooRight = true;	
		  document.getElementById("afcEastlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  afcEastTooRight = false;	
		  document.getElementById("afcEastlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (afcEastSlideTriggerLeft && !afcEastTooRight)
	  {
		  document.getElementById("afcEastcontent").style.left = (afcEastX - 3) + "px";
	  }
	  else if (afcEastSlideTriggerRight && !afcEastTooLeft)
	  {
		  document.getElementById("afcEastcontent").style.left = (afcEastX + 3) + "px";
	  }
	}
	// NFC East slide code.
	if (nfcEastSlideTriggerLeft || nfcEastSlideTriggerRight)
	{
	  nfcEastX = document.getElementById("nfcEastcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (nfcEastX >= nfcEastStartX)
	  {
		  nfcEastTooLeft = true;
		  document.getElementById("nfcEastlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  nfcEastTooLeft = false;	
		  document.getElementById("nfcEastlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (nfcEastX <= nfcEastStartX - 830 + (window.innerWidth - 360))
	  {
		  nfcEastTooRight = true;	
		  document.getElementById("nfcEastlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  nfcEastTooRight = false;	
		  document.getElementById("nfcEastlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (nfcEastSlideTriggerLeft && !nfcEastTooRight)
	  {
		  document.getElementById("nfcEastcontent").style.left = (nfcEastX - 3) + "px";
	  }
	  else if (nfcEastSlideTriggerRight && !nfcEastTooLeft)
	  {
		  document.getElementById("nfcEastcontent").style.left = (nfcEastX + 3) + "px";
	  }
	}
	// AFC West slide code.
	if (afcWestSlideTriggerLeft || afcWestSlideTriggerRight)
	{
	  afcWestX = document.getElementById("afcWestcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (afcWestX >= afcWestStartX)
	  {
		  afcWestTooLeft = true;
		  document.getElementById("afcWestlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  afcWestTooLeft = false;	
		  document.getElementById("afcWestlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (afcWestX <= afcWestStartX - 830 + (window.innerWidth - 360))
	  {
		  afcWestTooRight = true;	
		  document.getElementById("afcWestlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  afcWestTooRight = false;	
		  document.getElementById("afcWestlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (afcWestSlideTriggerLeft && !afcWestTooRight)
	  {
		  document.getElementById("afcWestcontent").style.left = (afcWestX - 3) + "px";
	  }
	  else if (afcWestSlideTriggerRight && !afcWestTooLeft)
	  {
		  document.getElementById("afcWestcontent").style.left = (afcWestX + 3) + "px";
	  }
	}
	// NFC West slide code.
	if (nfcWestSlideTriggerLeft || nfcWestSlideTriggerRight)
	{
	  nfcWestX = document.getElementById("nfcWestcontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (nfcWestX >= nfcWestStartX)
	  {
		  nfcWestTooLeft = true;
		  document.getElementById("nfcWestlightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  nfcWestTooLeft = false;	
		  document.getElementById("nfcWestlightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (nfcWestX <= nfcWestStartX - 830 + (window.innerWidth - 360))
	  {
		  nfcWestTooRight = true;	
		  document.getElementById("nfcWestlightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  nfcWestTooRight = false;	
		  document.getElementById("nfcWestlightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (nfcWestSlideTriggerLeft && !nfcWestTooRight)
	  {
		  document.getElementById("nfcWestcontent").style.left = (nfcWestX - 3) + "px";
	  }
	  else if (nfcWestSlideTriggerRight && !nfcWestTooLeft)
	  {
		  document.getElementById("nfcWestcontent").style.left = (nfcWestX + 3) + "px";
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
		afcNorthSlideTriggerLeft = true;
	}
	else if (key == 5)
	{
		afcNorthSlideTriggerLeft = false;
	}
	else if (key == 6)
	{
		afcNorthSlideTriggerRight = true;
	}
	else if (key == 7)
	{
		afcNorthSlideTriggerRight = false;	
	}
	// Keys 8-11 are designated for moving the NFC North bar.
	else if (key == 8)
	{
		nfcNorthSlideTriggerLeft = true;
	}
	else if (key == 9)
	{
		nfcNorthSlideTriggerLeft = false;
	}
	else if (key == 10)
	{
		nfcNorthSlideTriggerRight = true;
	}
	else if (key == 11)
	{
		nfcNorthSlideTriggerRight = false;	
	}
	// Keys 12-15 are designated for moving the AFC South bar.
	else if (key == 12)
	{
		afcSouthSlideTriggerLeft = true;
	}
	else if (key == 13)
	{
		afcSouthSlideTriggerLeft = false;
	}
	else if (key == 14)
	{
		afcSouthSlideTriggerRight = true;
	}
	else if (key == 15)
	{
		afcSouthSlideTriggerRight = false;	
	}
	// Keys 16-19 are designated for moving the NFC South bar.
	else if (key == 16)
	{
		nfcSouthSlideTriggerLeft = true;
	}
	else if (key == 17)
	{
		nfcSouthSlideTriggerLeft = false;
	}
	else if (key == 18)
	{
		nfcSouthSlideTriggerRight = true;
	}
	else if (key == 19)
	{
		nfcSouthSlideTriggerRight = false;	
	}
	// Keys 20-23 are designated for moving the AFC East bar.
	else if (key == 20)
	{
		afcEastSlideTriggerLeft = true;
	}
	else if (key == 21)
	{
		afcEastSlideTriggerLeft = false;
	}
	else if (key == 22)
	{
		afcEastSlideTriggerRight = true;
	}
	else if (key == 23)
	{
		afcEastSlideTriggerRight = false;	
	}
	// Keys 24-27 are designated for moving the NFC East bar.
	else if (key == 24)
	{
		nfcEastSlideTriggerLeft = true;
	}
	else if (key == 25)
	{
		nfcEastSlideTriggerLeft = false;
	}
	else if (key == 26)
	{
		nfcEastSlideTriggerRight = true;
	}
	else if (key == 27)
	{
		nfcEastSlideTriggerRight = false;	
	}
	// Keys 28-31 are designated for moving the AFC West bar.
	else if (key == 28)
	{
		afcWestSlideTriggerLeft = true;
	}
	else if (key == 29)
	{
		afcWestSlideTriggerLeft = false;
	}
	else if (key == 30)
	{
		afcWestSlideTriggerRight = true;
	}
	else if (key == 31)
	{
		afcWestSlideTriggerRight = false;	
	}
	// Keys 32-35 are designated for moving the NFC West bar.
	else if (key == 32)
	{
		nfcWestSlideTriggerLeft = true;
	}
	else if (key == 33)
	{
		nfcWestSlideTriggerLeft = false;
	}
	else if (key == 34)
	{
		nfcWestSlideTriggerRight = true;
	}
	else if (key == 35)
	{
		nfcWestSlideTriggerRight = false;	
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
	document.getElementById("adjustableafcNorth").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableafcSouth").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableafcEast").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableafcWest").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("ubarnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("ubarlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("nfcNorthnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("nfcNorthlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("nfcSouthnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("nfcSouthlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("nfcEastnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("nfcEastlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("nfcWestnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("nfcWestlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	if (window.innerWidth >= 678)
	{
		document.getElementById("adjustablebottombar").style.left = ((window.innerWidth) / 2) - 339 + "px";	
	}
	else
	{
		document.getElementById("adjustablebottombar").style.left = "0px";	
	}
	if (window.innerWidth >= 422)
	{
		document.getElementById("pagebartext").style.left = ((window.innerWidth) / 2) - 211 + "px";	
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
	afcNorthStartX = document.getElementById("afcNorthcontent").offsetLeft;
	afcNorthX = afcNorthStartX;
	nfcNorthStartX = document.getElementById("nfcNorthcontent").offsetLeft;
	nfcNorthX = nfcNorthStartX;
	afcSouthStartX = document.getElementById("afcSouthcontent").offsetLeft;
	afcSouthX = afcSouthStartX;
	nfcSouthStartX = document.getElementById("nfcSouthcontent").offsetLeft;
	nfcSouthX = nfcSouthStartX;
	afcEastStartX = document.getElementById("afcEastcontent").offsetLeft;
	afcEastX = afcEastStartX;
	nfcEastStartX = document.getElementById("nfcEastcontent").offsetLeft;
	nfcEastX = nfcEastStartX;
	afcWestStartX = document.getElementById("afcWestcontent").offsetLeft;
	afcWestX = afcWestStartX;
	nfcWestStartX = document.getElementById("nfcWestcontent").offsetLeft;
	nfcWestX = nfcWestStartX;
}

// Brings appropriate light buttons to the front when page is loaded.
function adjustButtons() {
	if (ubarX >= ubarStartX)
	{
		tooLeft = true;
		document.getElementById("ubarlightbuttonright").style.zIndex = "3";
	}
	if (afcNorthX >= afcNorthStartX)
	{
		afcNorthTooLeft = true;
		document.getElementById("afcNorthlightbuttonright").style.zIndex = "3";
	}
	if (nfcNorthX >= nfcNorthStartX)
	{
		nfcNorthTooLeft = true;
		document.getElementById("nfcNorthlightbuttonright").style.zIndex = "3";
	}
	if (afcSouthX >= afcSouthStartX)
	{
		afcSouthTooLeft = true;
		document.getElementById("afcSouthlightbuttonright").style.zIndex = "3";
	}
	if (nfcSouthX >= nfcSouthStartX)
	{
		nfcSouthTooLeft = true;
		document.getElementById("nfcSouthlightbuttonright").style.zIndex = "3";
	}
	if (afcEastX >= afcEastStartX)
	{
		afcEastTooLeft = true;
		document.getElementById("afcEastlightbuttonright").style.zIndex = "3";
	}
	if (nfcEastX >= nfcEastStartX)
	{
		nfcEastTooLeft = true;
		document.getElementById("nfcEastlightbuttonright").style.zIndex = "3";
	}
	if (afcWestX >= afcWestStartX)
	{
		afcWestTooLeft = true;
		document.getElementById("afcWestlightbuttonright").style.zIndex = "3";
	}
	if (nfcWestX >= nfcWestStartX)
	{
		nfcWestTooLeft = true;
		document.getElementById("nfcWestlightbuttonright").style.zIndex = "3";
	}
	if (window.innerWidth >= 1190)
	{
		afcNorthTooRight = true;
		document.getElementById("afcNorthlightbuttonleft").style.zIndex = "3";
		nfcNorthTooRight = true;
		document.getElementById("nfcNorthlightbuttonleft").style.zIndex = "3";
		afcSouthTooRight = true;
		document.getElementById("afcSouthlightbuttonleft").style.zIndex = "3";
		nfcSouthTooRight = true;
		document.getElementById("nfcSouthlightbuttonleft").style.zIndex = "3";
		afcEastTooRight = true;
		document.getElementById("afcEastlightbuttonleft").style.zIndex = "3";
		nfcEastTooRight = true;
		document.getElementById("nfcEastlightbuttonleft").style.zIndex = "3";
		afcWestTooRight = true;
		document.getElementById("afcWestlightbuttonleft").style.zIndex = "3";
		nfcWestTooRight = true;
		document.getElementById("nfcWestlightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		afcNorthTooRight = false;
		document.getElementById("afcNorthlightbuttonleft").style.zIndex = "1";
		nfcNorthTooRight = false;
		document.getElementById("nfcNorthlightbuttonleft").style.zIndex = "1";
		afcSouthTooRight = false;
		document.getElementById("afcSouthlightbuttonleft").style.zIndex = "1";
		nfcSouthTooRight = false;
		document.getElementById("nfcSouthlightbuttonleft").style.zIndex = "1";
		afcEastTooRight = false;
		document.getElementById("afcEastlightbuttonleft").style.zIndex = "1";
		nfcEastTooRight = false;
		document.getElementById("nfcEastlightbuttonleft").style.zIndex = "1";
		afcWestTooRight = false;
		document.getElementById("afcWestlightbuttonleft").style.zIndex = "1";
		nfcWestTooRight = false;
		document.getElementById("nfcWestlightbuttonleft").style.zIndex = "1";
	}
}

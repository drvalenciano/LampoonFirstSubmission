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

// Top Sports variables
var TopSportsSlideTriggerLeft = false;
var TopSportsSlideTriggerRight = false;
var TopSportsStartX = 0;
var TopSportsX = 0;
var TopSportsWidth = 830;
var TopSportsTooLeft = false;
var TopSportsTooRight = false;

// College Sports variables
var CollegeSportsSlideTriggerLeft = false;
var CollegeSportsSlideTriggerRight = false;
var CollegeSportsStartX = 0;
var CollegeSportsX = 0;
var CollegeSportsWidth = 830;
var CollegeSportsTooLeft = false;
var CollegeSportsTooRight = false;

// Team Sports variable
var TeamSportsSlideTriggerLeft = false;
var TeamSportsSlideTriggerRight = false;
var TeamSportsStartX = 0;
var TeamSportsX = 0;
var TeamSportsWidth = 830;
var TeamSportsTooLeft = false;
var TeamSportsTooRight = false;

// Individual Sports variables
var IndividualSportsSlideTriggerLeft = false;
var IndividualSportsSlideTriggerRight = false;
var IndividualSportsStartX = 0;
var IndividualSportsX = 0;
var IndividualSportsWidth = 830;
var IndividualSportsTooLeft = false;
var IndividualSportsTooRight = false;

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
	// Top Sports slide code.
	if (TopSportsSlideTriggerLeft || TopSportsSlideTriggerRight)
	{
	  TopSportsX = document.getElementById("TopSportscontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (TopSportsX >= TopSportsStartX)
	  {
		  TopSportsTooLeft = true;
		  document.getElementById("TopSportslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  TopSportsTooLeft = false;	
		  document.getElementById("TopSportslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (TopSportsX <= TopSportsStartX - 830 + (window.innerWidth - 360))
	  {
		  TopSportsTooRight = true;	
		  document.getElementById("TopSportslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  TopSportsTooRight = false;	
		  document.getElementById("TopSportslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (TopSportsSlideTriggerLeft && !TopSportsTooRight)
	  {
		  document.getElementById("TopSportscontent").style.left = (TopSportsX - 3) + "px";
	  }
	  else if (TopSportsSlideTriggerRight && !TopSportsTooLeft)
	  {
		  document.getElementById("TopSportscontent").style.left = (TopSportsX + 3) + "px";
	  }
	}
	// NFC North slide code.
	if (CollegeSportsSlideTriggerLeft || CollegeSportsSlideTriggerRight)
	{
	  CollegeSportsX = document.getElementById("CollegeSportscontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (CollegeSportsX >= CollegeSportsStartX)
	  {
		  CollegeSportsTooLeft = true;
		  document.getElementById("CollegeSportslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  CollegeSportsTooLeft = false;	
		  document.getElementById("CollegeSportslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (CollegeSportsX <= CollegeSportsStartX - 830 + (window.innerWidth - 360))
	  {
		  CollegeSportsTooRight = true;	
		  document.getElementById("CollegeSportslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  CollegeSportsTooRight = false;	
		  document.getElementById("CollegeSportslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (CollegeSportsSlideTriggerLeft && !CollegeSportsTooRight)
	  {
		  document.getElementById("CollegeSportscontent").style.left = (CollegeSportsX - 3) + "px";
	  }
	  else if (CollegeSportsSlideTriggerRight && !CollegeSportsTooLeft)
	  {
		  document.getElementById("CollegeSportscontent").style.left = (CollegeSportsX + 3) + "px";
	  }
	}
	// AFC South slide code.
	if (TeamSportsSlideTriggerLeft || TeamSportsSlideTriggerRight)
	{
	  TeamSportsX = document.getElementById("TeamSportscontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (TeamSportsX >= TeamSportsStartX)
	  {
		  TeamSportsTooLeft = true;
		  document.getElementById("TeamSportslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  TeamSportsTooLeft = false;	
		  document.getElementById("TeamSportslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (TeamSportsX <= TeamSportsStartX - 830 + (window.innerWidth - 360))
	  {
		  TeamSportsTooRight = true;	
		  document.getElementById("TeamSportslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  TeamSportsTooRight = false;	
		  document.getElementById("TeamSportslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (TeamSportsSlideTriggerLeft && !TeamSportsTooRight)
	  {
		  document.getElementById("TeamSportscontent").style.left = (TeamSportsX - 3) + "px";
	  }
	  else if (TeamSportsSlideTriggerRight && !TeamSportsTooLeft)
	  {
		  document.getElementById("TeamSportscontent").style.left = (TeamSportsX + 3) + "px";
	  }
	}
	// NFC South slide code.
	if (IndividualSportsSlideTriggerLeft || IndividualSportsSlideTriggerRight)
	{
	  IndividualSportsX = document.getElementById("IndividualSportscontent").offsetLeft;
	  // First portion of the function simply checks if sliding right is available based on slider position.
	  if (IndividualSportsX >= IndividualSportsStartX)
	  {
		  IndividualSportsTooLeft = true;
		  document.getElementById("IndividualSportslightbuttonright").style.zIndex = "3";
	  }
	  else
	  {
		  IndividualSportsTooLeft = false;	
		  document.getElementById("IndividualSportslightbuttonright").style.zIndex = "1";
	  }
	  // Next, the function checks if sliding left is available.
	  if (IndividualSportsX <= IndividualSportsStartX - 830 + (window.innerWidth - 360))
	  {
		  IndividualSportsTooRight = true;	
		  document.getElementById("IndividualSportslightbuttonleft").style.zIndex = "3";
	  }
	  else
	  {
		  IndividualSportsTooRight = false;	
		  document.getElementById("IndividualSportslightbuttonleft").style.zIndex = "1";
	  }
	  
	  // Then the function moves the slider if the user is hovering over a button.
	  if (IndividualSportsSlideTriggerLeft && !IndividualSportsTooRight)
	  {
		  document.getElementById("IndividualSportscontent").style.left = (IndividualSportsX - 3) + "px";
	  }
	  else if (IndividualSportsSlideTriggerRight && !IndividualSportsTooLeft)
	  {
		  document.getElementById("IndividualSportscontent").style.left = (IndividualSportsX + 3) + "px";
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
		TopSportsSlideTriggerLeft = true;
	}
	else if (key == 5)
	{
		TopSportsSlideTriggerLeft = false;
	}
	else if (key == 6)
	{
		TopSportsSlideTriggerRight = true;
	}
	else if (key == 7)
	{
		TopSportsSlideTriggerRight = false;	
	}
	// Keys 8-11 are designated for moving the NFC North bar.
	else if (key == 8)
	{
		CollegeSportsSlideTriggerLeft = true;
	}
	else if (key == 9)
	{
		CollegeSportsSlideTriggerLeft = false;
	}
	else if (key == 10)
	{
		CollegeSportsSlideTriggerRight = true;
	}
	else if (key == 11)
	{
		CollegeSportsSlideTriggerRight = false;	
	}
	// Keys 12-15 are designated for moving the AFC South bar.
	else if (key == 12)
	{
		TeamSportsSlideTriggerLeft = true;
	}
	else if (key == 13)
	{
		TeamSportsSlideTriggerLeft = false;
	}
	else if (key == 14)
	{
		TeamSportsSlideTriggerRight = true;
	}
	else if (key == 15)
	{
		TeamSportsSlideTriggerRight = false;	
	}
	// Keys 16-19 are designated for moving the NFC South bar.
	else if (key == 16)
	{
		IndividualSportsSlideTriggerLeft = true;
	}
	else if (key == 17)
	{
		IndividualSportsSlideTriggerLeft = false;
	}
	else if (key == 18)
	{
		IndividualSportsSlideTriggerRight = true;
	}
	else if (key == 19)
	{
		IndividualSportsSlideTriggerRight = false;	
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
	document.getElementById("adjustableTopSports").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("adjustableTeamSports").style.left = (window.innerWidth - 260) + "px";
	document.getElementById("ubarnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("ubarlightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("CollegeSportsnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("CollegeSportslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	document.getElementById("IndividualSportsnormalbuttonright").style.left = (window.innerWidth - 80) + "px";	
	document.getElementById("IndividualSportslightbuttonright").style.left = (window.innerWidth - 80) + "px";
	if (window.innerWidth >= 678)
	{
		document.getElementById("adjustablebottombar").style.left = ((window.innerWidth) / 2) - 339 + "px";	
	}
	else
	{
		document.getElementById("adjustablebottombar").style.left = "0px";	
	}
	if (window.innerWidth >= 366)
	{
		document.getElementById("pagebartext").style.left = ((window.innerWidth) / 2) - 183 + "px";	
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
	TopSportsStartX = document.getElementById("TopSportscontent").offsetLeft;
	TopSportsX = TopSportsStartX;
	CollegeSportsStartX = document.getElementById("CollegeSportscontent").offsetLeft;
	CollegeSportsX = CollegeSportsStartX;
	TeamSportsStartX = document.getElementById("TeamSportscontent").offsetLeft;
	TeamSportsX = TeamSportsStartX;
	IndividualSportsStartX = document.getElementById("IndividualSportscontent").offsetLeft;
	IndividualSportsX = IndividualSportsStartX;
}

// Brings appropriate light buttons to the front when page is loaded.
function adjustButtons() {
	if (ubarX >= ubarStartX)
	{
		tooLeft = true;
		document.getElementById("ubarlightbuttonright").style.zIndex = "3";
	}
	if (TopSportsX >= TopSportsStartX)
	{
		TopSportsTooLeft = true;
		document.getElementById("TopSportslightbuttonright").style.zIndex = "3";
	}
	if (CollegeSportsX >= CollegeSportsStartX)
	{
		CollegeSportsTooLeft = true;
		document.getElementById("CollegeSportslightbuttonright").style.zIndex = "3";
	}
	if (TeamSportsX >= TeamSportsStartX)
	{
		TeamSportsTooLeft = true;
		document.getElementById("TeamSportslightbuttonright").style.zIndex = "3";
	}
	if (IndividualSportsX >= IndividualSportsStartX)
	{
		IndividualSportsTooLeft = true;
		document.getElementById("IndividualSportslightbuttonright").style.zIndex = "3";
	}
	if (window.innerWidth >= 1190)
	{
		TopSportsTooRight = true;
		document.getElementById("TopSportslightbuttonleft").style.zIndex = "3";
		CollegeSportsTooRight = true;
		document.getElementById("CollegeSportslightbuttonleft").style.zIndex = "3";
		TeamSportsTooRight = true;
		document.getElementById("TeamSportslightbuttonleft").style.zIndex = "3";
		IndividualSportsTooRight = true;
		document.getElementById("IndividualSportslightbuttonleft").style.zIndex = "3";
	}
	else 
	{
		TopSportsTooRight = false;
		document.getElementById("TopSportslightbuttonleft").style.zIndex = "1";
		CollegeSportsTooRight = false;
		document.getElementById("CollegeSportslightbuttonleft").style.zIndex = "1";
		TeamSportsTooRight = false;
		document.getElementById("TeamSportslightbuttonleft").style.zIndex = "1";
		IndividualSportsTooRight = false;
		document.getElementById("IndividualSportslightbuttonleft").style.zIndex = "1";
	}
}
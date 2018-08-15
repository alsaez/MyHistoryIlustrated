
/**************************Implementing the Work section******************************/

//Variables
var current = 0; 			// Start Point
var time = 3000;	// Time Between Switch
var ctrlTime; // To manage setTimeout function
var sliderDiv = document.getElementById("project-img"); //Get the image projected
var ul = document.getElementById("projectList"); //Get the ul element
var ilList = ul.getElementsByClassName("project"); // Get all il elements with class="project" inside the ul
var modal = document.getElementById('myModal'); // Get the modal
var modalImg = document.getElementById("myImg"); // Get the image to set the modal
var captionText = document.getElementById("caption"); // Get the Modal caption
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

/***************Function for Slider**********************************************************/
function updateSlider()
{
	// Check If Index Is Under Max
		if(current < ilList.length - 1){
		  // Add 1 to Index
		  current++;
		} else {
			// Reset Back To O
			current = 0;
		}
	  sliderDiv.src = ilList[current].children[0].firstElementChild.src;
		sliderDiv.alt = "PROJECT: " + ilList[current].children[0].children[1].children[0].innerHTML + ". Used " + ilList[current].children[0].children[1].children[1].innerHTML+" ...";

		var myElem = document.getElementsByClassName("active");
		if(myElem.length!=0) myElem[0].classList.remove("active");
		ilList[current].classList.add("active");

  // Run function every x seconds
	ctrlTime = setTimeout("updateSlider()", time);
}

// Run function when page loads
document.addEventListener('DOMContentLoaded', updateSlider());

/********Function to enlarge (modal) the slider image when clicked***************************/
sliderDiv.onclick = function(){
		//stop the slider timeout
		clearTimeout(ctrlTime);
		// Get the image and insert it inside the modal
    modal.style.display = "block";
    modalImg.src = this.src;
		//Use the image "alt" text as a caption
    captionText.innerHTML = this.alt;
}

/********Function to close the modal when the user clicks on <span> (x) **************************************/
span.onclick = function() {
  modal.style.display = "none";
	updateSlider();
}

/************************Code to update the slider image when a project is selected in the project listview (ul)******************************/
ul.onclick = function(event) {
    var target;
		//Testing: alert(event.target.parentElement.tagName);
		// Get the a tags
		if(event.target.parentElement.tagName != "A") target = event.target.parentElement.parentElement;
		else target = event.target.parentElement;
    //Testing: alert(target.tagName)
  	if(target.parentElement.id!="challenge"){
		// Set the image src of the slider with the selected one
		sliderDiv.src = target.firstElementChild.src;
		sliderDiv.alt = "PROJECT: " + target.children[1].children[0].innerHTML + ". Used " + target.children[1].children[1].innerHTML + " ...";
		//stop the slider timeout
		clearTimeout(ctrlTime);
		//Update the class active for the il elements inside the ul
		var myElem = document.getElementsByClassName("active");
		if(myElem.length!=0) {
			if(myElem[0].innerHTML !== target.parentElement.innerHTML)
			{
				myElem[0].classList.remove("active");
				target.parentElement.classList.add("active");
			}
			else {
				//Restart the slider if user unselect the active li element
				myElem[0].classList.remove("active");
				updateSlider();
			}
		}
	}
}


/*************FINNNNNNNNNNNNNNNNNNNNNNNNNN*****************************************************/

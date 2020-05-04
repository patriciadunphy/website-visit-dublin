/*Function to slide down booking form in contact.html*/
$(document).ready(function(){
	/*Hiding booking form on contact page and sliding it down*/
	$("#bookingForm").hide();
	$("#bookingButton").click(function(){
		$("#bookingForm").slideDown();
	});
	/*Hiding read more on about page and sliding it down*/
	$("#readMoreContent").hide();

	$("#readMoreButton").click(function(){
		$("#readMoreContent").fadeIn();
		$("#readMoreButton").hide();
	});

	/*Hiding read more in eat-section on index page*/
	$("#readMoreEat").hide();
	$("#readMoreButtonEat").click(function(){
		$("#readMoreEat").fadeIn();
		$("#readMoreButtonEat").hide();
	});

	$("#readMoreSee").hide();
	$("#readMoreButtonSee").click(function(){
		$("#readMoreSee").fadeIn();
		$("#readMoreButtonSee").hide();
	});
	
});
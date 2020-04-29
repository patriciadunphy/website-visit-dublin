/*Function to slide down booking form in contact.html*/
$(document).ready(function(){

	$("#bookingForm").hide();

	$("#bookingButton").click(function(){
		$("#bookingForm").slideDown();
	});
	
});
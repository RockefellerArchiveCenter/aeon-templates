//Add classes and close button to alerts to make them dismissable using Bootstrap's javascript
$(function () {
	$('.alertSystem, .alertUser, .alertStatus, .alertDeliveryLocation').addClass('alert alert-dismissable').prepend('<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span>');
});

//Adds activeNav class to menu items based on which page is shown
$(function (){
	var id = $('#content').attr('data-menu');
	//This isn't quite right
	$.each($('#nav li'), function(){
		if(id && $(this).attr('data-menu') === id) {
			$(this).addClass('activeNav');
		}
	});
});

//Tooltip rollovers for action buttons at top of forms


//Dialog with status definitions - get a list of these from...where?
//Submitted by User, Awaiting Future Request Processing, Awaiting Request Processing, In Item REtrieval, Item Checked Out, Request Finished
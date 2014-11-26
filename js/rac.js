//Add classes and close button to alerts to make them dismissable using Bootstrap's alerts javascript component
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

//Create tooltip rollovers for action buttons at top of forms using Bootstrap's tooltips javascript component
$(function (){
	$.each($('#transactionMenu a'), function (){
		$(this).attr('data-toggle', "tooltip").attr('data-placement', 'top');
		var text = $(this).html();
		if(text === "Edit Request") {
			$(this).attr('title', 'Make changes to this request');
		} else if(text === "Cancel Request") {
			$(this).attr('title', 'Cancel this request');
		} else if(text === "Resubmit Request") {
			$(this).attr('title', 'Submit this request again');
		} else if(text === "Request Item Again") {
			$(this).attr('title', 'Make a copy of this request to submit again');
		} else if(text === "Order Copy of Item") {
			$(this).attr('title', 'Request copies of materials in this request');
		} else if(text === "Edit Request") {
			$(this).attr('title', 'Make changes to this request');
		} else if(text === "Export Citation") {
			$(this).attr('title', 'Export a citation of these materials in RIS format');
		} 
	});
});

// Initializes Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Confirm request cancellation dialog
$(function (){
	var link = $("#transactionMenu a:contains('Cancel Request')").attr('href');
	console.log(link);
	$("#transactionMenu:contains('Cancel Request')").on('click', function(){
		$('#cancelModal').modal('show');
		return false;
	});
	$("#cancelModal button[class='btn btn-primary']").on('click', function(){
		window.location.href = link
	});
});

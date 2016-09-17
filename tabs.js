var custom = function() {

	this.openTab = function openTab(tabName) {

	    // Show the current tab, and add an "active" class to the link that opened the tab
	    $(".tabcontent").css('display', 'none');
	    $(".tabcontent").removeClass("active");

	    $("#"+ tabName).css('display', 'block');
	    $(this).addClass("active");
	}
}

// create an object for the class
var custom = new custom();
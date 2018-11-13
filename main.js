(function($) {

$(window).bind('keydown', function(event) {
	if (event.ctrlKey || event.metaKey) {
		switch (String.fromCharCode(event.which).toLowerCase()) {
			case 's':
			event.preventDefault();
			angular.element('#ct-controller-ui').scope().iframeScope.savePage();
			break;
		}
	}
});

$(document).ready(function(){
    $("#ct-artificial-viewport").load(function(){
        $(this).contents().bind('keydown', function(event) {
        	if (event.ctrlKey || event.metaKey) {
        		switch (String.fromCharCode(event.which).toLowerCase()) {
        			case 's':
        			event.preventDefault();
        			angular.element('#ct-controller-ui').scope().iframeScope.savePage();
        			break;
        		}
        	}
        });
    });
});

})( jQuery );
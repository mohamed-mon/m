
// navbar red

$(document).ready(function(){
	
		$(window).scroll(function(){
			if($(this).scrollTop() >=600) {
				$("nav").css("background-color","#2B2E33");
			}
			else {
				$("nav").css("background-color","rgba(10,0,0,0.5)");
			}
		});
	
});

// navbar red
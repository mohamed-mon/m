
// navbar red

$(document).ready(function(){
	
		$(window).scroll(function(){
			if($(this).scrollTop() >=700) {
				$("nav").css("background-color","#8b0110");
			}
			else {
				$("nav").css("background-color","rgba(10,0,0,0.5)");
			}
		});
	
});

// navbar red

// CountUp.js  v1.9.3

//12

var options = {
useEasing: true,
useGrouping: true,
separator: ',',
decimal: '.',
};
var demo = new CountUp('myTargetElement1', 0, 12, 0, 7, options);
if (!demo.error) {
demo.start();
} else {
console.error(demo.error);
}



//500

var options = {
useEasing: true,
useGrouping: true,
separator: ',',
decimal: '.',
};
var demo = new CountUp('myTargetElement2', 0, 500, 0, 5, options);
if (!demo.error) {
demo.start();
} else {
console.error(demo.error);
}


//850

var options = {
useEasing: true,
useGrouping: true,
separator: ',',
decimal: '.',
};
var demo = new CountUp('myTargetElement3', 0, 850, 0, 5, options);
if (!demo.error) {
demo.start();
} else {
console.error(demo.error);
}


//2015

var options = {
useEasing: true,
useGrouping: true,
separator: '',
decimal: '.',
};
var demo = new CountUp('myTargetElement4', 0, 2015, 0, 3, options);
if (!demo.error) {
demo.start();
} else {
console.error(demo.error);
}



// CountUp.js  v1.9.3

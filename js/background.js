$(document).ready(function(){
    var d = new Date();
    var n = d.getHours();
    if (n > 5 || n < 8)
 		document.body.className = "sunrise";
    else if (n > 17 && n < 21)
		document.body.className = "sunset";
    else if (n > 20 && n < 6 )
    	document.body.className = "night"
    else
        document.body.className = "day";
});

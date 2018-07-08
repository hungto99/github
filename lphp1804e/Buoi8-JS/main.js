function check() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	
	console.log(a,b);
	
	if ((parseInt(a) + parseInt(b)) > 10) {
		document.getElementById("check").src = "http://whatsoninthenortheast.co.uk/event_images/1512662299491_0.jpg";
	} else {
		alert("no");
	}
}
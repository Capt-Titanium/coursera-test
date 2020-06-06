function sayhello() {
	var a = document.getElementById('name').value;
	console.log(a);
	var message = "<h2>hello " + a + " !</h2>";

	document.getElementById("content").innerHTML = message;

}
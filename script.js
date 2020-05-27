if(document.getElementsByClassName('firstForm')[0]){
	document.getElementsByClassName('firstForm')[0].onsubmit = function(e){
		document.getElementById("pop").style.display = "none";
		e.preventDefault();
		const field = this;
		let username = field.querySelector('input[type=email]');
		let pass = field.querySelector('input[type=password]');

		if((username.value === 'admin' && pass.value === 'admin') ){
			allFunc('pop');
		}else if ((username.value === 'user' && pass.value === 'user') ){
			allFunc('pop1');
		} else {
			alert('Credentials are invalid');
		}
	}
}
function showMsg(varName)
{
	$("#"+varName).fadeIn('slow', function () {
		$(this).delay(3200).fadeOut('slow');
	});
}
function clearInputs() {
	document.getElementById("username").value = '';
	// document.getElementById("username").focus(); // not suitable for mobile
	document.activeElement.blur();
	document.getElementById("password").value = '';
}
function addClass(varName) {
	let v = document.getElementById(varName);
	v.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show', 'alertMsg');


}

function allFunc(varName) {
	addClass(varName);
	showMsg(varName);
	clearInputs();

}

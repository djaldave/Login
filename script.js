if(document.getElementsByClassName('firstForm')[0]){
	document.getElementsByClassName('firstForm')[0].onsubmit = function(e){
		e.preventDefault();
		const field = this;
		let username = field.querySelector('input[type=text]');
		let pass = field.querySelector('input[type=password]');

		if((username.value === 'admin' && pass.value === 'admin') ||
			((username.value === 'user' && pass.value === 'user') )){
			alert("It works")
		} else {
			alert('Credentials are invalid')
		}
	}
}

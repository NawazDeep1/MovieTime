function validate (){
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser ="admin";
	var corpass = "12345";
	
	if (user.value == coruser)
	{
		if(pass.value == corpass)
		{
			window.alert("You are logged in as " + user.value);
			return true;
		}
		else{
			window.alert("Incorrect Username or password!");
			return false;
		}
	}
	
	else {
			window.alert("Incorrect Username or password!");
			return false;
		}
		
	
}

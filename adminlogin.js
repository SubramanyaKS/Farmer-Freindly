function validate()
{
	var username=document.getElementById("username").value;
	varvpassword=document.getElementById("password").value;
	if(username=="admin"&& password=="user")
	{
		alert("login succesfully");
		return false;
	}
	else
	{
		alert("login failed");
		
	}
}
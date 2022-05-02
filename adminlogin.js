function validate()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="admin"&& password=="user")
	{
		alert("login succesfully");
		window.location.href="login.html";
		return false;
	}
	else
	{
		alert("login failed");
		window.location.href="Adminlogin.html";
		
	}
}
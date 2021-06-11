window.onload=function(){
const pass_field = document.querySelector('.pass-key');
    const showBtn = document.querySelector('.show');
	var pass= document.getElementById('pass');
	
    showBtn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
          }else{
            pass_field.type = "password";
            showBtn.textContent = "SHOW";
            showBtn.style.color = "#222";
          }
         });
}
function phonenumchk()
{
	var num = document.register.number;
	var numfmt = /^[0-9]{10}$/;
	if(num.value.match(numfmt))
	{
			document.register.txtpwd.focus();
			return true;
	}
	else if(num == "")
	{
		alert("Enter the Phone Number ");
	}
	else
	{
		alert("You have entered an invalid phone number!");
		num.focus();
		return false;
	}
} 
function pwdchk()
{
	var pwd = document.register.txtpwd;
	var pwdfmt = /^[A-Z][@$#&?%~][0-9][a-z]{5}$/
	if (pwd.value.match(pwdfmt))
	{
		//checking pwd is equal to pwdfmt.
		
		return true;
	}
	else if(pwd=="")
	{
		alert("Please enter  password");
		return false;
	}
	else
	{
		alert("You have entered incorrect password: ");
		pwd.focus();
		return false;
	}

}
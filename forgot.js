function F_forgot()
	{
		
		var phone=document.getElementById("number").value;
		
		
		var pass=document.getElementById("password").value;
		
		var cpass=document.getElementById("cpassword").value;
		


		var txtphone=document.forgot.number.value;
		var phonetest=txtphone.match(/^[0-9]{10}$/);
		
		
		var txtpassword=document.forgot.password.value;
		//var passtest=txtpassword.match(/^[A-Z]*[&*#$]*[0-9]*[a-z]*$/);
		var passtest=txtpassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[%$#@!*]).{8,20}$/);
		
		if(phone=="" || pass=="" || cpass=="")
		{
			alert("Please enter Required fields");
		}

		else if(txtphone!=phonetest)
		{
			alert("invalid number");
		}
		else if(txtpassword!=passtest)
		{
			alert("invalid password");
		}
		else if(cpass!=pass)
		{
			alert("Password not matched");

		}
		else{
		if(txtphone==phonetest && txtpassword==passtest && cpass==pass)
		{
			alert("Password changed Succesfully");
			window.location.href='www.google.com';
		}
	}
	}
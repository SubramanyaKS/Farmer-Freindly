function newuser()
	{
		var name=document.getElementById("name").value;
		var phone=document.getElementById("phone").value;
		var city=document.getElementById("city").value;
		var state=document.getElementById("state").value;
		var pin=document.getElementById("pincode").value;
		var pass=document.getElementById("password").value;
		var mail=document.getElementById("email").value;
		var cpass=document.getElementById("confirm_password").value;
		


		var txtphone=document.form.phone.value;
		var phonetest=txtphone.match(/^[0-9]{10}$/);
		var txtpincode=document.form.pincode.value;
		var pintest=txtpincode.match(/^[0-9]{6}$/);
		var txtemail=document.form.email.value;
		var emailtest=txtemail.match(/^[A-Za-z0-9]*@gmail.com$/);
		var txtpassword=document.form.password.value;
		//var passtest=txtpassword.match(/^[A-Z]*[&*#$]*[0-9]*[a-z]*$/);
		var passtest=txtpassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[%$#@!*]).{8,20}$/);
		

		if(name==""||phone==""||city==""||state=="" || pin=="" || pass=="")
		{
			alert("Please Enter Required information");
		}
		/* if(mail!=null)
		{
			if(txtemail!=emailtest){
				alert("Invalid email id");
			}
		}*/
		
		 if(txtphone!=phonetest)
		{
			alert("Invalid mobile number");
		}
		 if(cpass!=pass)
		{
			alert("Invalid password");
			
		}
		 if(txtpincode!=pintest)	
		{
			alert("Invalid Pincode");
				
		}
		 if(txtpassword!=passtest)
		{
			alert("Password should contain one uppercase letter,special char.and number");
			
		}
		else
		{
			alert("Registration succesful,  Please Login");
			window.location.href="login.html";
		}
	}
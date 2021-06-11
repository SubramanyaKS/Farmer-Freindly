function newuser()
	{
		var name=document.getElementById("name").value;
		var phone=document.getElementById("phone").value;
		var city=document.getElementById("city").value;
		var state=document.getElementById("state").value;
		var pin=document.getElementById("pincode").value;
		var pass=document.getElementById("password").value;
		var mail=document.getElementById("email").value;


		var txtphone=document.form.phone.value;
		var phonetest=txtphone.match(/^[0-9]{10}$/);
		var txtpincode=document.form.pincode.value;
		var pintest=txtpincode.match(/^[0-9]{6}$/);
		var txtemail=document.form.email.value;
		var emailtest=txtemail.match(/^[A-Za-z0-9]*@gmail.com$/);
		var txtpassword=document.form.password.value;
		var passtest=txtpassword.match(/^[A-Z][&*#$][0-9][a-z]{5}$/);

		if(name==""||phone==""||city==""||state=="" || pin=="" || pass=="")
		{
			alert("Please Enter Required information");
		}

		
		else if(txtphone!=phonetest)
		{
			alert("Invalid mobile number");
		}
		else if(txtpincode!=pintest)	
		{
			alert("Invalid Pincode");
				
		}
		/*else if(mail!=null)
		{
			if(txtemail!=emailtest){
				alert("Invalid email id");
			}
		}*/
		else if(txtpassword!=passtest)
		{
			alert("Password should contain one uppercase letter,special char.and number");
			
		}
		else
		{
			alert("Registration succesful,  Please Login");
			window.location.href="login.html";
		}
	}
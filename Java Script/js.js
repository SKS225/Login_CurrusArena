//password is backwaaspassword and user id is Anonymus_user//
/////////////////////////////////////////////////////////////

//alert("PLEASE NOTE:\n==>The User ID is: Anonymus_user\n==>The Password is: bhagyahase");

function submitx()
{
	var x=document.formx.userid.value;
	var y=document.formx.pass.value;
	
	if(x=="Anonymus_user"&&y=="bhagyahase")
		clicka();
	else
		confirm("Wrong Password\nPlease try again");
}

function clicka()
{
	alert("Correct User ID and Password!\nRedirecting to CURRUS ARENA website...\nClick OK to continue");
	setTimeout(red,0);
}

function red()
{
	window.location="Afterlogin/index.html";
}


//Styling Effects

function foc(x)
{
	x.style.backgroundColor="#80dfff";
}

function blu(x)
{
	x.style.backgroundColor="#ffff66";
	x.style.color= red;/*"#9900cc"*/;
}

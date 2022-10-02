function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Hayden"&& password=="aki")
{
    alert("Login Successfully");
    (window.opener){window.opener.location.href="https://haydenandaki.github.io/Website-Development/"; window.close.location.href="https://haydenandaki.github.io/Login/";}
    return false;
}
else
{
    alert("Login Failed");
}

}

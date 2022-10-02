function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Hayden"&& password=="aki")
{
    alert("Login Successfully");
    window.open("https://haydenandaki.github.io/Website-Development/"); 
    return false;
    window.close
}
else
{
    alert("Login Failed");
}

}

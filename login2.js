function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("Login Successfully");
    window.open(haydenandaki.github.io/Website-Development/)
    return false;
}
else
{
    alert("Login Failed");
}


}

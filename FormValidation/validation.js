//checking for blank inputs
// function validate()
// {
//     var username=document.getElementById("name");
//     var password=document.getElementById("pwd");
//     if(username.value.trim()=="" || password.value.trim()=="")
//     {
//         alert("No blank values allowed");
//          return false;
//     }
//     else{
//         return true;
//     }
// }
//checking for length
function validate()
{
    var username=document.getElementById("name");
    var password=document.getElementById("pwd");
    if(username.value.trim()=="")
    {
        //alert("Blank username");
        username.style.border="solid 3px red";
        document.getElementById("lbuser").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Blank password");
        return false;
    }
    else if(password.value.trim().length<5)
    {
        //alert("Password too short");
        password.style.border="solid 3px red";
        document.getElementById("lbpwd").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}
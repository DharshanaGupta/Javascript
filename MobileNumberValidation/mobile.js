function Validate()
{
    var phone=document.getElementById("phone").value ;
    var regex=/^[7-9]\d{9}$/;
    // /[5-9]\w[a-z]0$/
    if(regex.test(phone))
    {
        document.getElementById("lbuser").innerHTML="valid";
        document.getElementById("lbuser").style.visibility="visible";
        document.getElementById("lbuser").style.color="green";
    }
    else
    {
        document.getElementById("lbuser").innerHTML="invalid";
        document.getElementById("lbuser").style.visibility="visible";
        document.getElementById("lbuser").color="red";
    }
}
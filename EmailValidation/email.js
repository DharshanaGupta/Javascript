function Validate()
{
    var mail=document.getElementById("mail").value ;
    var regex=/^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+).([a-z]{2,20})()?$/;
    
    if(regex.test(mail))
    {
        document.getElementById("lbtext").innerHTML="valid";
        document.getElementById("lbtext").style.visibility="visible";
        document.getElementById("lbtext").style.color="green";
    }
    else
    {
        document.getElementById("lbtext").innerHTML="invalid";
        document.getElementById("lbtext").style.visibility="visible";
        document.getElementById("lbtext").color="red";
    }
}
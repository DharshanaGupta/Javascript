//form validation




var gender=document.getElementById("gender");

var dob=document.getElementById("dob");
var time=document.getElementById("time");

var interest=document.getElementById("interest");
function validate()
{
   
    
   validateName();
   validateEmail();
   validateMobile();
   validatePassword();
   validateCheckbox();
   validateAddress();
   Display();
   
}
function Display()
{
    if (validateName() && validateEmail() && validateMobile() && validatePassword() && validateCheckbox() && validateAddress()) 
    {
        DisplayDetails();
    }
    
}

function validateName()
{
    var name=document.getElementById("name");
    if(name.value.trim()=="")
    {
        alert("Name must be filled");
        name.style.border="solid 2px red";
        //document.getElementById("lbuser").style.visibility="visible";
        return false;
    }
    else{
        name.style.border="solid 2px green";
        return true;
    }
   
}

function validateMobile()
{
    var number=document.getElementById("phone").value;
    regex=/^[7-9]\d{9}$/;
    if(regex.test(number))
    {
        document.getElementById("phone").style.border="solid 2px green";
        //document.getElementById("phone").innerHTML="valid";
        return true;
    }
    else{
        alert("invalid number");
        document.getElementById("phone").style.border="solid 2px red";
        return false;
        //document.getElementById("lbnumber").style.visibility="visible";
    }
}

function validateEmail()
{
    var mailid=document.getElementById("email");
    regex=/^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})(.[a-zA-Z]{2,20})?$/ //?-denotes optional
    if(regex.test(email.value))
    {
        mailid.style.border="solid 2px green";
        return true;
    }
    else{
        alert("invalid mailid");
        mailid.style.border="solid 2px red";
        return false;
        //document.getElementById("lbmail").style.visibility="visible";
    }
}

function validatePassword()
{
    var password=document.getElementById("pwd");
    regex=/^[a-zA-Z0-9 ! @ # $ % ^ & * ( ) - + ' " , / \/]+$/;
    if(regex.test(password.value))
    {
        password.style.border="solid 2px green";
        return true;
    }
    else{
        alert("invalid Password");
        //document.getElementById("password").style.border="solid 2px red";
        password.style.border="solid 2px red";
        return false;
        //document.getElementById("lbpassword").style.visibility="visible";
    }
    // if(document.getElementById("password").value.length<8)
    // {
    //     document.getElementById("password").style.border="solid 2px red";
    //     document.getElementById("lbpasswordlen").style.visibility="visible";
    // }
}

function validateAddress()
{
    var address=document.getElementById("address");
    if(address.value.trim()=="")
    {
        alert("Please fill out the address");
        address.style.border="solid 2px red";
        return false;

    }
    else{
        address.style.border="solid 2px green";
        return true;
    }
}

function validateCheckbox()
{
    var lang1=document.getElementById("lang1");
    var lang2=document.getElementById("lang2");
    var lang3=document.getElementById("lang3");
    var string="";
    var checked=[];
    if(lang1.checked==true)
    {
        string=document.getElementById("lang1").value;
        checked.push(string);
    }
    if(lang2.checked==true)
    {
        string=document.getElementById("lang2").value;
        checked.push(string);
    }
    if(lang3.checked==true)
    {
        string=document.getElementById("lang3").value;
        checked.push(string);
    }
    if(checked.length==0)
    {
        alert("please select the language");
        return false;
    }
    else{
        return true;
    }
}

// document.getElementById("btn1").addEventListener("click", function()
// {
//     var name=document.getElementById("name");
    
//     if(name.value.trim()==="")
//     {
//         alert("hi");
//         name.style.border="solid 2px red";
//         document.getElementById("lbuser").style.visibility="visible";
//         //return false;
//     }
// });

function DisplayDetails()
{
    document.getElementById("info-table").style.display="none";
    document.getElementById("output-table").style.display="block";
    document.getElementById("uname").innerText=document.getElementById("name").value;
    document.getElementById("emailid").innerText=document.getElementById("email").value;
    document.getElementById("password").innerText=document.getElementById("pwd").value;
    var radio1=document.getElementById("radio1");
    var radio2=document.getElementById("radio2");
    var radio3=document.getElementById("radio3");
    if(radio1.checked==true)
    {
        document.getElementById("gen").innerText=document.getElementById("radio1").value;
    }
    else if(radio2.checked==true)
    {
        document.getElementById("gen").innerText=document.getElementById("radio2").value;
    }
    else if(radio3.checked==true){
        document.getElementById("gen").innerText=document.getElementById("radio3").value;
    }
    document.getElementById("home-address").innerText=document.getElementById("address").value;
    document.getElementById("birth-date").innerText=document.getElementById("dob").value;
    document.getElementById("current-time").innerText= document.getElementById("time").value;
    var lang1=document.getElementById("lang1");
    var lang2=document.getElementById("lang2");
    var lang3=document.getElementById("lang3");
    var string="";
    var checked=[];
    if(lang1.checked==true)
    {
        string=document.getElementById("lang1").value;
        checked.push(string);
    }
    if(lang2.checked==true)
    {
        string=document.getElementById("lang2").value;
        checked.push(string);
    }
    if(lang3.checked==true)
    {
        string=document.getElementById("lang3").value;
        checked.push(string);
    }
    document.getElementById("languages").innerText=checked;

    var selected=[];
    for(var option of document.getElementById("interest").options)
    {
        if(option.selected==true)
        {
            selected.push(option.value);
        }
    }
    document.getElementById("interest-value").innerText=selected;
}

function Back()
{
    document.getElementById("output-table").style.display="none";
    document.getElementById("info-table").style.display="block";
}

function Reset()
{
    document.getElementById("information").reset();
}
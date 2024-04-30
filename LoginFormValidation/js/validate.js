//form validation

var mailid=document.getElementById("email");
var number=document.getElementById("phone");
var password=document.getElementById("pwd");
var gender=document.getElementById("gender");
var address=document.getElementById("address");
var dob=document.getElementById("dob");
var time=document.getElementById("time");
var language=document.getElementById("lang");
var interest=document.getElementById("interest");
// function validate()
// {
//    validateName();
// }

function validateName()
{
    var name=document.getElementById("name");
    if(name.value.trim()=="")
    {
        alert("hi");
        name.style.border="solid 2px red";
        document.getElementById("lbuser").style.visibility="visible";
        return false;
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
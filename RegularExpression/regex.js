//simple expression
// function validate()
// {
//     var uname=document.getElementById("name").value;
//     var regex=/E00/;
//     if(regex.test(uname))
//     {
//         alert("valid username");
//     }
//     else{
//         alert("invalid username");
//         document.getElementById("lbuser").style.visibility="visible";
//         return false;
//     }
// }

function validate()
{
    var uname=document.getElementById("name").value ;
    //regex=new RegExp("E00","i");
    var regex=/[a-dA-D]E0[a-f]0/;
    if(regex.test(uname))
    {
        alert("valid username");

    }
    else{
        alert("invalid username");
        document.getElementById("lbuser").style.visibility="visible";

    }
}
//taking input from user
function buttonClick()
{
    var string=document.getElementById("text1").value;
    alert("value present in the text box is "+string);
}

function onButtonClick()
{
    var str=document.getElementById("pwd").value;
    if(str=="12345")
    {
        alert("Password matches");
    }
    else{
        alert("Password incorrect");
    }
}
// taking input from radio buttons
function fn1()
{
    var radioBtn1=document.getElementById("radioBtn1");
    var radioBtn2=document.getElementById("radioBtn2");
    if(radioBtn1.checked==true)
    {
        alert("The Gender selected is "+radioBtn1.value);
    }
    else if(radioBtn2.checked==true)
    {
        alert("The Gender slected is "+radioBtn2.value);
    }
    else{
        alert("Gender is not selected");
    }
}
//taking input from select box
function dropDownClick()
{
    var select=document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}
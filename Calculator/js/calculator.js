
function Display(input)
{
    document.getElementById("textbox").value+=input;
    //textbox += input;
}

function clearData()
{
    document.getElementById("textbox").value="";
}

function evaluate()
{
    
    document.getElementById("textbox").value=eval(document.getElementById("textbox"));
}
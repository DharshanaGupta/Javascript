var ID=0;
var sec=0;
function PrintMsg()
{
    document.getElementById("op").innerHTML=sec+" seconds";
    sec++;
}

function Start()
{
     //ID=window.setTimeout(PrintMsg,5000);
     ID=window.setInterval(PrintMsg,1000);
    
}
function Stop()
{
    //window.clearTimeout(ID);
    window.clearInterval(ID);
}
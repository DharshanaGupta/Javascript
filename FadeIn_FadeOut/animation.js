var opacity=0; //it ranges from 0 -1
var intervalID=0;
function fadeOut()
{
    intervalID=setInterval(hide,200);
}
function hide(){
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity-=0.1;
        img.style.opacity=opacity;
    }
    else{
        clearInterval(intervalID);
        
    }
}
function fadeIn()
{
    intervalID=setInterval(show,200);
    
}
function show()
{
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity<1)
    {
        opacity+=0.1;
        img.style.opacity=opacity;
    }
    else{
        clearInterval(intervalID);
    }
}
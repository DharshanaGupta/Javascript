var width=100;
var difference=2;
var intervalID=0;
//document.getElementById("img1").style.width=width;

function increase()
{
    intervalID=setInterval(zoomIn,20);
}
function zoomIn()
{
    if(width<200)
    {
        width=width+difference;
        document.getElementById("image1").style.width=width;
    }
    else{
        clearInterval(intervalID);
    }
}
function decrease()
{

}
document.write("<h1> Even or Odd");

var num=5;
if(num%2==0)
{
    document.write("<h3>Even</h3>");
}
else{
    document.write("<h3>Odd</h3>");
}

document.write("<h1>Positive or Negative</h1>");
if(num>0)
{
    document.write("<h3>Positive number</h3>");
}
else if(num<0){
    document.write("<h3> Negative number</h3>");
}
else{
    document.write("<h3>Number is neither positive or negative</h3>");
}

document.write("<h1>Positive and Even");
if(num>0)
{
    if(num%2==0)
    {
        document.write("<h3>Positive and Even number</h3>");
    }
    else{
        document.write("<h3>Positive but not even<h3>");
    }
}
else{
    document.write("<h3>Number is negative<h3>");
}
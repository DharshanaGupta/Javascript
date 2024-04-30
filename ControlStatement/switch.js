/*finding the day of week by accepting its number. eg 1->sunday 2->monday etc*/
var day=6;
//it can accept number,string , boolean,expressions
switch(day)
{
    case 1:
      document.write("Sunday");  
      break;
    case 2:
        document.write("Monday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 4:
        document.write("Wednesday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 6:
        document.write("Friday");
        break;
    case 7:
        document.write("Saturday");
        break;
    default:
        document.write("Invalid Input");
        break;
}
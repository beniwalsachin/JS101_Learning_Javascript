//Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day="wed";
switch(day){
  case "sun":
    console.log("sunday");
    break;
      case "mon":
    console.log("monday");
    break;
  case "tue":
    console.log("tuesday");
    break;
  case "wed":
    console.log("wednesday");
    break;
  case "thr":
    console.log("thrusday");
    break;
  case "fri":
    console.log("friday");
    break;
  case "sat":
    console.log("saturday");
    break;
  default:console.log("wrong input");
}
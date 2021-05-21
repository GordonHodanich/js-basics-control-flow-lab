function scuberGreetingForFeet(distance){
if (distance <= 400){
  return "This one is on me!";
  }
else if (distance >= 2000 && distance <2499){
  return "I will gladly take your thirty bucks.";
  }
else if (distance > 2500){
  return "No can do.";
  }
}

function ternaryCheckCity(name){
  let cityName = name === 'NYC' ? 'Ok, sounds good.' : 'No go.';
return (cityName);
}


function switchOnCharmFromTip(tip){
 switch (tip){
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return "Bye.";
 }
  
}


//function scuberGreetingForFeet(){
  //if (scuberGreetingForFeet <= 400){
    //if (scuberGreetingForFeet > 2000){
      //if (scuberGreetingForFeet > 2500){
      //}return "No go."
    //} return "I will gladly take your thirty bucks."
 // }return "This one is on me!"
//}

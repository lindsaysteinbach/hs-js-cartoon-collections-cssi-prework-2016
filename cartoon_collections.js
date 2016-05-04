var i = 0;
var dwarvesList = "";

function dwarfRollCall(dwarves) {
  while (i < dwarves.length) {
    dwarvesList = dwarvesList + ((i+1) + ". " + dwarves[i] + " ");
    i=i+1;
  }
  return dwarvesList;
}

function summonCaptainPlanet(planeteerCalls) {
  while (i < planeteerCalls.length) {
  planeteerCalls[i] = (planeteerCalls[i].toUpperCase()+"!");
  i=i++;
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
	for (i = 0;  words[i].length <= 4; i++) {
    return false;
  }
  return true;
}

function findTheCheese(foods) {
  for (result = "", i = 0; i < foods.length; i++) {
    if (foods[i] == ("cheddar"||"gouda"||"camembert")) {
      result = foods[i];
      break;
    }
    else {
      result = null;
    }
  }
  return result;
}




 //   planeteerCalls.forEach(function(call) {
 //   return call.toUpperCase + "!";
  //})
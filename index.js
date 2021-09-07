function saturdayFun(activity = "roller-skate"){
	return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(task = "go to the office"){
    return `This Monday, I will ${task}.`
}


//function wrapAdjective(msg = "You are"){
  //  const innerFunction = function(rando = "special") {
     //   return `${msg} ${rando}.`;
  //  };
   // return innerFunction("*");
 //   }


function wrapAdjective(sym = "*") {
    return function b(adjective = "special"){
        return "You are " + sym + adjective + sym + "!";}
    }


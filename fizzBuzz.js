const fizzBuzz = (nombre) => {
  // Start here
  let multiple3 = (nombre % 3 ===0);
  let multiple5 = (nombre % 5===0);

  if(multiple3 && multiple5 ){
  return "fizzbuzz"
} 
else if (multiple5){
  return "buzz";
} else if (multiple3){
  return "fizz";
} else {
  return nombre
}
 
};



//console.log(fizzBuzz(7));



module.exports = fizzBuzz;

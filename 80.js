

function testSize(num) {
  if (num < 5){
      return "Tiny";
  }
 else if (num < 10){
    return "small";
}
else if (num < 15){
    return "medium";
}
else if (num < 20){
    return "large";
}
else{
    return "Huge";
}


  return "Change Me";
  // Only change code above this line
}


console.log(testSize(7));
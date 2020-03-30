function calculateArea(x, y, action) {
  switch (action) {
    case "*":
      return(x * y);
    case "/":
      return(x / y);
    case "-":
      return(x - y);
    case "+":
      return(x + y);
    case "^":
      return(Math.pow(x, y));
    case "%":
      return(x % y);
    default:
      return("Invalid Text");
      ;
  }
}
console.log(calculateArea(10, 6, "%"));

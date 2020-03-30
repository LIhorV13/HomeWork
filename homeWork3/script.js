const userName = prompt("Name?");
const userAge = +prompt("How old are you?");
const doesDrink = true;
if (userName === null || userName === "") {
  console.error("Invalid name");
} else if (userAge === 0 || Number.isNaN(userAge)) {
  console.error("Invalid Age");
} else {
  if (!doesDrink) {
    console.log("Nice!!!");
  } else {
    if (userAge < 18) {
      console.log("No no no!!!");
    } else if (userAge > 40) {
      console.log("U2old");
    } else {
      console.log("for you this 12y.o. bottle");
    }
  }
}

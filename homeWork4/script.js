alert("Hello, this is my game 'Guess the number'")
let num = Math.floor(Math.random() * Math.floor(11));
console.log(num)
var version;
while(num !== version) {
  let temp =prompt("Choose number from '0-10'");
  version = parseInt(temp);
  if(temp === null) {
    break;
  }
}

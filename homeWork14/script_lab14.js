//counter
for (let v = 1; v < 6; v++) {
    var div = document.getElementById("count" + v);
    div.innerHTML = 0;
    div.addEventListener("click", count);  
}
function count() {
    this.innerHTML = parseInt(this.innerHTML) + 1;
}
//colors
for (let v = 1; v < 6; v++) {
    var divC = document.getElementById("colour" + v);
    divC.addEventListener("click", colour);
}
function colour() {
    if (this.style.background != "blue" && this.style.background != "green" && this.style.background != "yellow") {
        this.style.background = "blue";
    }
    else if (this.style.background == "blue")
        this.style.background = "green";
    else if (this.style.background == "green") {
        this.style.background = "yellow";
    }
    else this.style.background = "blue";
}
//list
for (let v = 1; v < 6; v++) {
    var divC = document.getElementById("list" + v);
    divC.addEventListener("click", underline);
}
function underline() {
    for (let v = 1; v < 6; v++) {
        var divC = document.getElementById("list" + v);
        if (divC.style.backgroundColor == "red" && this != divC) {
            divC.style.backgroundColor = "white";
        }
    }
    this.style.backgroundColor = "red";
}

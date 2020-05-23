function creatForm() {
    let form = document.createElement("form");
    form.classList.add("form");
    let email = document.createElement("input");
    email.classList.add("field", 'email');
    email.setAttribute('id', "badE");
    email.type = "input";
    email.addEventListener("input", isValidEmail);
    form.appendChild(email);
    let pass = document.createElement("input");
    pass.classList.add("field", "pass");
    pass.setAttribute('id', "badP");
    pass.type = "password";
    pass.addEventListener("input", isValidPass);
    form.appendChild(pass);
    let submit = document.createElement("button");
    submit.classList.add("field", "submit");
    submit.type = "button";
    submit.setAttribute('disabled', 'true');
    submit.setAttribute('content', "submit");
    submit.innerHTML = 'submit';
    form.appendChild(submit);
    submit.addEventListener("click", submiting);
    document.getElementById("app").appendChild(form);
}
function isValidEmail() {
    let reg = /\w{1,}\@\w{1,}\.{1,}\w{1,}/;
    let target = document.querySelector(".email")

    if (reg.test(target.value)) {
        target.removeAttribute('id');
        target.setAttribute('id', "goodE")
        target.style.background = "white";
        if (document.querySelector(".pass").id == "goodP") {
            document.querySelector(".submit").removeAttribute('disabled');
        }
    }
    else {
        target.removeAttribute('id');
        target.setAttribute('id', "badE")
        target.style.background = "red";
        document.querySelector(".submit").setAttribute('disabled', true);

    }
}
function isValidPass() {
    let reg = /\w{1,}\d{1,}[@$#!?&].{8,}/;;
    let target = document.querySelector(".pass")
    if (reg.test(target.value)) {
        target.removeAttribute('id');
        target.setAttribute('id', "goodP");
        target.style.background = "white";
        if (document.querySelector(".email").id == "goodE") {
            document.querySelector(".submit").removeAttribute('disabled');
        }
    }
    else {
        target.removeAttribute('id');
        target.setAttribute('id', "badP")
        target.style.background = "red";
        document.querySelector(".submit").setAttribute('disabled', true);
    }

}
function submiting() {
    let pass = document.querySelector(".pass")
    let email = document.querySelector(".email")
    let res = `email: ${email.value}, pass: ${pass.value}`;
    alert(res);

    pass.value = "";
    pass.removeAttribute('id');
    pass.setAttribute('id', "badP");

    email.value = "";
    email.removeAttribute('id');
    email.setAttribute('id', "badE");
    document.querySelector(".submit").setAttribute('disabled', true);
}
creatForm();
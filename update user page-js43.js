let nameele = document.getElementById("name");
let emailele = document.getElementById("email");
let nameerrele = document.getElementById("nameErrMsg");
let emailerrele = document.getElementById("emailErrMsg");
let formele = document.getElementById("addUserForm");

function function1() {
    if (nameele.value === "") {
        nameerrele.textContent = "Required*";
    } else {
        nameerrele.textContent = "";
    }
}

function function2() {
    if (emailele.value === "") {
        emailerrele.textContent = "Required*";
    } else {
        emailerrele.textContent = "";
    }
}

nameele.addEventListener("blur", function1);
emailele.addEventListener("blur", function2);
formele.addEventListener("submit", function(event) {
    event.preventDefault();
    function1();
    function2();
});
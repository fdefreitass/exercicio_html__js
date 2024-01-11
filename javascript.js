
const form = document.querySelector("#form");
const validate = document.querySelector(".success");
const inputCampo = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const buttons = document.querySelectorAll("#btn");
const numberRegex = /(\b[0-9]\b)/g

form.addEventListener("submit", (e) => {
    e.preventDefault();
});



function NumberValidateOne() {
    if (inputCampo[0].value == "") {
        SetError(0);
    } else {
        RemoveError(0);
        NumberValidateTwo();
    }
}

function NumberValidateTwo() {
    if (inputCampo[1].value <= inputCampo[0].value) {
        SetError(1);
        cancelaUser();
    } else {
        RemoveError(1);
        LiberaUser();
    }
}

function LiberaUser () {
    validate.style.display = "block"
    inputCampo[0].value = ""
    inputCampo[1].value = ""
}
function cancelaUser () {
    validate.style.display = "none"
}

function SetError (index) {
    spans[index].style.display = "block"
}
function RemoveError (index) {
    spans[index].style.display = "none"
}

function clearUser() {
    inputCampo[0].value = ""
    inputCampo[1].value = ""
    cancelaUser();
    RemoveError(1);
}

console.log(form, inputCampo, spans, validate);
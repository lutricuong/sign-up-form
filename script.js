const password = document.querySelector("#pwd");
const passwordConfirm = document.querySelector("#confirmPwd");
const messageCheckPass = document.querySelector(".checkPass")
function check() {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.classList.add("alertConfirmPwd");
        messageCheckPass.textContent = "* Passwords do not match"
    }
    else {
        passwordConfirm.classList.remove("alertConfirmPwd");
        messageCheckPass.textContent = "";
    }
}

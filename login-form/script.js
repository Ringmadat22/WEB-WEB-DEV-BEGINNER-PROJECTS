const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const phoneNumber = document.querySelector(".phonenumber");
const emailAddress = document.querySelector(".emailaddress");
const isPasswordValid = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmpassword");

function isPasswordValid(password) {
    const isLengthValid = password.lenght>8 
    const containsNumber = /[]/.test(password);
    const containsSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const containesCapitalLettes = /[A-Z]/.test(password);
}
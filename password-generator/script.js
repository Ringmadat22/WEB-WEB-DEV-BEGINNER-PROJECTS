function genPassword() {

    //YOu can choice the password length// 
    const passLength = 5;

    //This are the characters that we'll use for generating our password you can even use your name like this const chars = "Ringo" 

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\"<>,.?/"

    let password = "";

    //here we are using the loop for method

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.Selected();
    document.execCommand("copy");
}
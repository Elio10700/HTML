function validate(e) {
    e.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass1").value;
    var age1 = document.getElementById("age1").value;
    var msg1 = document.getElementById("message");
    var message;

    if (email === "") {
        message = "Email had to be entered";
        msg1.style.color = "goldenrod"; 
    } else if (password === "") {
        message = "Password had to be entered";
        msg1.style.color = "red";
    } else if (age1 === "") {
        message = "Age had to be entered";
        msg1.style.color = "red";
    } else {
        message = "Login successful";
        msg1.style.color = "green";
    }

    msg1.innerHTML = message;
}
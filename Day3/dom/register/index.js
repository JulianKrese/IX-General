const onSubmit = () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm.checkValidity()) {
        //TODO: stuff
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const bio = document.getElementById("bio").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(firstName, lastName, bio, email, password);
    }
    else {
        console.log("input not valid");
    }
    registerForm.classList.add("was-validated");
}
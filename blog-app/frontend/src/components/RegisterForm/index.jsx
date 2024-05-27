import React from "react";

import "./index";

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

export default function RegisterForm() {
  return (
    <>
        <div class="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div class="col-4">
                <h1> Register </h1>
                <form id="registerForm">
                    <div class="form-floating mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="firstName" 
                            placeholder="Julian"
                            required
                        />
                        <label for="firstName"> First Name </label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="lastName" 
                            placeholder="Krese"
                            required/>
                        <label for="lastName"> Last Name </label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea
                        type="text"
                        class="form-control"
                        id="bio"
                        placeholder="Tell us about yourself."
                        required
                        ></textarea>
                        <label for="bio">Bio</label>
                        <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                            placeholder="name@example.com"
                            required/>
                        <label for="email"> Email address </label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="form-floating">
                        <input 
                            type="password" 
                            class="form-control" 
                            id="password" 
                            placeholder="Password"
                            required/>
                        <label for="password"> Password </label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </form>
                <div>
                    <a href="/login"> Login </a>
                </div>
                <button type="button" class="btn btn-primary w-100 my-3" onclick="onSubmit()">
                    Register
                </button>
            </div>
        </div>
    </>
  );
}
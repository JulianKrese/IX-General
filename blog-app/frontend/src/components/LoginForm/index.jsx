import React from "react";

import "./index";

const onSubmit = () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm.checkValidity()) {
        //TODO: stuff
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password);
    }
    else {
        console.log("input not valid");
    }
    loginForm.classList.add("was-validated");
}

export default function LoginForm() {
  return (
    <>
        <div class="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div class="col-4">
                <h1> Login </h1>
                <form id="loginForm">
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
                    <a href="/register"> Register </a>
                </div>
                <button type="button" class="btn btn-primary w-100 my-3" onclick="onSubmit()">
                    Login
                </button>
            </div>
        </div>
    </>
  );
}
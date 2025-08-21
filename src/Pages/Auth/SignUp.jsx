import React from "react";
import { createContext } from "react";
import "./signUp.css";
export const MyContext = createContext();

function SignUp() {
  
  return (
    <div>
      
      <article id="article1" className="articles">
        <section className="sec-1 loginform" style={{ display: "none" }}>
          <div>
            <div>
              <h2>Hello, Wellcome!</h2>
              <br />
              <p>Don't have an account?</p>
              <br />
              <button
                id="register"
                onClick={() => {
                  let login = document.querySelectorAll(".loginform");
                  let signUp = document.querySelectorAll(".registerform");
                  

                  for (let i = 0; i < login.length; i++) {
                    login[i].style.display = "none";
                  }
                  for (let j = 0; j < signUp.length; j++) {
                    signUp[j].style.display = "block";
                  }
                }}
              >
                Register
              </button>
            </div>
          </div>
        </section>
        <section className="sec-1 sec-11 registerform">
          <div>
            <br />
            <h1>Registration</h1>
            <br />
            <form
              action="http://localhost:1515/form"
              method="post"
              className="form"
              id="myForm"
            >
              <input type="text" name="name" className="userInput" placeholder="Username" required />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="checkingEmail"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit">Register</button>
            </form>
            <h1 className="userIcon">👤</h1>
            <h1 className="emailIcon">📩</h1>
            <h1 className="passwordIcon">🔑</h1>
          </div>
        </section>
        <section className="sec-2 loginform" style={{ display: "none" }}>
          <div><br />
            <h1>Login</h1>
            <br />
            <form action="" id="logForm" onSubmit={(e) => {
              let email = document.getElementById("email").value;
              let password = document.getElementById("password").value;
              let message = document.getElementById("message");
              let logForm = document.getElementById("logForm");
              let userName = "";
              let condition = true;

              e.preventDefault()
              // fetch("http://localhost:1515/users")
              fetch("/loginData.json")
              .then((res) => res.json())
              .then((value) => {
                console.log(value)
                value.map((data) => {
                  if(data.Email == email && data.Password == password) {
                    // message.textContent = "You Are Succsfuly Register ✅✅✅✅✅✅"
                    window.location.href = "http://localhost:5173/"
                    condition = false;
                    userName = data.Name;
                  }
                });
                if(condition) {
                  document.querySelector(".checkName").classList.add("redBorder");
                  document.querySelector("#password").classList.add("redBorder");
                }
                logForm.reset();
              })
            }}>
              <input
                id="email"
                type="email"
                name="name"
                placeholder="Email"
                className="checkName"
                required
              />
              <input
              id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <p>Forgot Password?</p>
              <br />
              <button type="submit">Login</button>
            </form>
            <h1 className="logImailIcon">📩</h1>
            <h1 className="logPasswordIcon">🔑</h1>
          </div>
        </section>
        <section
          className="sec-2 sec-22 registerform"
          // style={{ display: "none" }}
        >
          <div>
            <div>
              <h2>Wellcome Back!</h2>
              <br />
              <p>Already have an account?</p>
              <br />
              <button
                id="login"
                onClick={() => {
                  let login = document.querySelectorAll(".loginform");
                  let signUp = document.querySelectorAll(".registerform");

                  for (let i = 0; i < login.length; i++) {
                    login[i].style.display = "block";
                  }
                  for (let j = 0; j < signUp.length; j++) {
                    signUp[j].style.display = "none";
                  }
                }}
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </article>
      <h1 id="message"></h1>
    </div>
  );
}

export default SignUp;

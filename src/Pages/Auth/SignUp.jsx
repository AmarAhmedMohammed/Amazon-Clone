import React from "react";
import "./signUp.css";

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
                  // alert("register");
                  console.log(document.querySelectorAll(".loginform").style.display = "none")
                  document.querySelectorAll("registerform").style.display = "block";
                  // document.getElementById("article2").style.transition =
                  //   "display .8s ease-in-out";
                }}
              >
                Register
              </button>
            </div>
          </div>
        </section>
        <section className="sec-1 sec-11 registerform" >
          <div><br />
            <h1>Registration</h1>
            <br />
            <form
              action="http://localhost:1515/form"
              method="post"
              className="form"
              id="myForm"
            >
              <input type="text" name="name" placeholder="Username" required />
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
          </div>
        </section>
        <section className="sec-2 loginform" style={{ display: "none" }}>
          <div>
            <h1>Login</h1>
            <br />
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Email"
                className="checkName"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <p>Forgot Password?</p>
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </section>
        <section
          className="sec-2 sec-22 registerform"
          // style={{ display: "none" }}
        >
          <div>
            <div>
              <h2>Wellcome Back!</h2><br />
              <p>Already have an account?</p><br />
              <button
                id="login"
                onClick={() => {
                  // document.getElementById("article1").style.transition ="display .8s ease-in-out";
                  document.querySelectorAll(".loginform").style.display = "block";
                  document.querySelectorAll("registerform").style.display = "none";
                }}
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default SignUp;

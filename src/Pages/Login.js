import "./login.css";
import logo from "../img/logo-sm.png";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

function Login() {
  const [currentForm, setCurrentForm] = useState("LOGIN");

  const showRegistrationForm = (e) => {
    e.preventDefault();
    if(currentForm==="LOGIN"){
      setCurrentForm("REGISTER");
    }else{
      setCurrentForm("LOGIN");
    }
  }

  return (
    <div>
      {currentForm === "LOGIN" &&
            <div className="login_container lg:flex flex-row">
            <div className="branding_section basis-2/3">
              <div className="branging_image">
                <div className="headline">
                  <h2>
                    Make sure you keep your<br className="hidden lg:block" /> dearest moments with
                  </h2>
                  <h1 className="mt-0 mb-0 pb-0 logo">Online Diary</h1>
                </div>
              </div>
            </div>
            <div className="login_form_container self-center basis-2/5">
              <form className="mx-auto mx-5">
                <img src={logo} height="45" width="406" />
                <h2 className="pb-150">Log in</h2>
                <label>
                  <h4>E-mail</h4>
                  <input type="email" name="email" placeholder="example@example.com" />
                </label>
                <label>
                  <h4>Password</h4>
                  <input type="password" name="password" placeholder="strongpassword" />
                </label>
                <div className="flex justify-between">
                  <NavLink to="/feed"><input type="submit" value="Login" className="mt-5 mb-3 active login" /></NavLink>
                  <button to="/feed"><input type="submit" value="Register" className="mt-5 mb-3" onClick={showRegistrationForm} /></button>
                </div>
              </form>
            </div>
          </div>
      }
      {currentForm === "REGISTER" &&
            <div className="login_container lg:flex flex-row">
            <div className="branding_section basis-2/3">
              <div className="branging_image">
                <div className="headline">
                  <h2>
                    Make sure you keep your<br className="hidden lg:block" /> dearest moments with
                  </h2>
                  <h1 className="mt-0 mb-0 pb-0 logo">Online Diary</h1>
                </div>
              </div>
            </div>
            <div className="login_form_container self-center basis-2/5">
              <form className="mx-auto mx-5">
                <img src={logo} height="45" width="406" />
                <h2 className="pb-150">Register</h2>
                <label>
                  <h4>Name</h4>
                  <input type="text" name="firstName" placeholder="John" />
                </label>
                <label>
                  <h4>Surname</h4>
                  <input type="text" name="lastName" placeholder="Doe" />
                </label>
                <label>
                  <h4>Password</h4>
                  <input type="password" name="password" placeholder="strongpassword" />
                </label>
                <label>
                  <h4>E-mail</h4>
                  <input type="email" name="email" placeholder="example@example.com" />
                </label>
                <div className="mt-5 mb-3 flex justify-between">
                  <NavLink to="/"><input type="submit" value="Register" className="active login" /></NavLink>
                  <button to="/"><input type="submit" value="Login" onClick={showRegistrationForm} /></button>
                </div>
              </form>
            </div>
          </div>
      }
    </div>
  );
}

export default Login;

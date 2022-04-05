import "./login.css";

function Login() {
  return (
    <div className="login_container">
      <div className="branding_section justify-center fw">
        <div className="headline">
          <h2>
            Make sure you keep your<br /> dearest moments with
          </h2>
          <h1 className="mt-0 mb-0 pb-0 logo">Online Diary</h1>
        </div>
        <div className="login_form_container self-center">
          <form className="fw w-410 mx-5">
            <label>
              <h4>E-mail</h4>
              <input type="email" name="email" placeholder="example@example.com" />
            </label>
            <label>
              <h4>Password</h4>
              <input type="password" name="password" placeholder="strongpassword" />
            </label>
            <input type="submit" value="Login" className="mt-5 mb-3" />
            <h5 className="text-center">don’t have an account?<br /> <a href="" className="fw-700">Register</a></h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

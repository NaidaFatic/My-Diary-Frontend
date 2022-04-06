import "./login.css";
import logo from "../img/logo-sm.png";

function Login() {
  return (
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
        <form className="mx-auto w-410 mx-5">
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
            <input type="submit" value="Login" className="mt-5 mb-3 active login" />
            <input type="submit" value="Register" className="mt-5 mb-3" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.login_container}>
      <div className={classes.branding_section}>
        <h2>
          Make sure you keep your <br /> dearest moments with
        </h2>
        <h1>ONLINE DIARY</h1>
      </div>
      <div className={classes.login_form_container}>
        <form>
          <input></input>
          <input></input>
        </form>
      </div>
    </div>
  );
}

export default Login;

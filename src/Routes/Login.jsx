import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formState, setFormstate] = useState({ email: "", password: "" });
  const auth = useContext(AppContext);
  const navigate = useNavigate;

  function handelChange(e) {
    const { name, value } = e.target;

    setFormstate({
      ...formState,
      [name]: value
    });
  }

  function handelSubmit(e) {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        // alert("Success");
        console.log(res);
        auth.handelLogin(res.token);
        navigate("/Dashboard");
      })
      .catch((err) => {});
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handelSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={formState.email}
              onChange={handelChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={formState.password}
              onChange={handelChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

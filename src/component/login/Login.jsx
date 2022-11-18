import { NavLink } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form action="" className="form">
              <div>
                <label>Email </label>
                <input type="email" />
                <label className="error"></label>
              </div>
              <div>
                <label>Password </label>
                <input type="password" />
                <label className="error"></label>
              </div>
              <button className="btn btn-info  btn-block">Login</button>
              <p style={{ textAlign: "center" }}>
                <small>If not register , then register first</small>
              </p>
            </form>
            <button className="btn btn-info  btn-block">
              <NavLink>Register</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

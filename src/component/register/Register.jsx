import "./Register.css";

export default function Register() {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form action="" className="form">
              <div>
                <label style={{ align: "left", display: "block" }}>
                  Firstname
                </label>
                <input type="text" name="firstName" className="form-control" />
                <label className="error"></label>
              </div>
              <div>
                <label style={{ align: "left", display: "block" }}>
                  Lastname
                </label>
                <input type="text" name="lasttName" className="form-control" />
                <label className="error"></label>
              </div>
              <div>
                <label style={{ align: "left", display: "block" }}>Email</label>
                <input type="email" name="email" className="form-control" />
                <label className="error"></label>
              </div>
              <div>
                <label style={{ align: "left", display: "block" }}>
                  Address
                </label>
                <input type="text" name="address" className="form-control" />
                <label className="error"></label>
              </div>
              <div>
                <label style={{ align: "left", display: "block" }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
                <label className="error"></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

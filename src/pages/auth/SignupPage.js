import React from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import authLayout from "../../hoc/authLayout";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <form
          style={{
            textAlign: "left",
            maxHeight: "560px",
            overflowY: "scroll",
          }}
          className="login-form"
        >
          <div className="d-flex align-items-center my-4">
            <h1 className="text-center fw-normal mb-0 me-3">Sign Up</h1>
          </div>
          {/* name input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              First Name
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Last Name
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter your last name"
            />
          </div>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Confirm Email address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Confirm ypur email address"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
          </div>

          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Confirm Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Confirm your password"
            />
          </div>

          {/* firm name */}
          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Firm Name
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter your firm name"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Terms And Conditions
              </label>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <Link to="/login" type="button" className="btn btn-primary btn-lg">
              Signup
            </Link>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              already have an account?{" "}
              <a href="/login" className="link-danger">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default authLayout(LoginPage);

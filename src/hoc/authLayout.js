import React from "react";
import Logo from "../assets/images/logo24.png";

const authLayout = (ChildComponent) => {
  class AuthLayout extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      return (
        <>
          <section>
            <img
              src={Logo}
              alt="logo"
              style={{
                position: "absolute",
                top: "20",
                left: "50",
                marginLeft: "20px",
                objectFit: "cover",
                maxHeight: "75px",
                maxWidth: "75px",
              }}
            />
            <div className="container-fluid h-custom">
              <h3
                style={{
                  textAlign: "center",
                  color: "#0000FF",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                Customer Support /Admin Portal
              </h3>
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    alt="hey"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <ChildComponent {...this.props} />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }

  return AuthLayout;
};

export default authLayout;

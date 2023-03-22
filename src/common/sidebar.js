import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo24.png";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="border-end sidenav" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom ">
          <Link to="/">
            <img alt="Alt content" class="firm-logo" src={logo} />
          </Link>
        </div>
        <PerfectScrollbar className="sidebar-items">
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <Link tag="a" className="" to="/">
                <i className="fa fa-dashboard"></i> Dashboard
              </Link>
            </li>
            <li className="mb-1">
              <Link tag="a" className="" to="/payments">
                <i class="fa fa-credit-card"></i> Payment Details
              </Link>
            </li>

            <li className="mb-1">
              <Link tag="a" className="" to="/account">
                <i class="fa fa-toggle-on" aria-hidden="true"></i> Account
                Status
              </Link>
            </li>
            <li className="mb-1">
              <Link tag="a" className="" to="/email">
                <i class="fa fa-envelope" aria-hidden="true"></i> Email Settings
              </Link>
            </li>
            <li className="mb-1">
              <Link tag="a" className="" to="/voicecall">
                <i class="fa fa-phone" aria-hidden="true"></i> Call Settings
              </Link>
            </li>
            <li className="mb-1">
              <Link tag="a" className="" to="/whatsapp">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>{" "}
                WhatsAppSettings
              </Link>
            </li>
            <li className="border-top my-3"></li>
            {/* collapsable list item example */}
            {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}
          </ul>
        </PerfectScrollbar>
        <div className="dropdown fixed-bottom-dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://via.placeholder.com/50"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <span>Peter</span>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link className="dropdown-item" to="/profile">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                <i className="fa fa-sign-out" aria-hidden="true"></i> Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;

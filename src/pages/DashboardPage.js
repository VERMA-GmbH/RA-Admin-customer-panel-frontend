import React from "react";
import adminLayout from "../hoc/adminLayout";
import FirmDashboard from "../DashboardBody/FirmDashabord/FirmDashboard";
import { fontWeight } from "@mui/system";
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}
        >
          Dashboard
        </h1>

        <div>
          <FirmDashboard />
        </div>
      </>
    );
  }
}

export default adminLayout(DashboardPage);

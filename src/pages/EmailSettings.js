import React from "react";
import adminLayout from "../hoc/adminLayout";
import EamilSettingsDashboard from "../DashboardBody/EmailSettingsDashboard/EmailSettingsDashboard";

const EmailSettings = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Email Settings
      </h1>
      <EamilSettingsDashboard />
    </div>
  );
};

export default adminLayout(EmailSettings);

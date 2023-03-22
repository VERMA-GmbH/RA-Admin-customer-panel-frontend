import React from "react";
import adminLayout from "../hoc/adminLayout";
import WhatsAppCallsettingsDashboard from "../DashboardBody/WhatsAppCallDashabord/WhatsAppCallSettingsDashboard";
const WhatsAppCallsettings = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        WhatsApp Call Settings
      </h1>
      <WhatsAppCallsettingsDashboard />
    </div>
  );
};

export default adminLayout(WhatsAppCallsettings);

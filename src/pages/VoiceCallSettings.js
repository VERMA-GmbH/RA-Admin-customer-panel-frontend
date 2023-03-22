import React from "react";
import adminLayout from "../hoc/adminLayout";
import VoiceCallSettingsDashboard from "../DashboardBody/VoiceCallSettingsDashbaord/VoiceCallSettingsDashboard";
const VoiceCallSettings = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Voice Call Settings 
      </h1>
      <VoiceCallSettingsDashboard />
    </div>
  );
};
export default adminLayout(VoiceCallSettings);

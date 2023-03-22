import React from "react";

import adminLayout from "../hoc/adminLayout";
import PaymentDetailsDashboard from "../DashboardBody/PaymentDetailsDashbaord/PaymentDetailsDashboard";
const PaymentDetails = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      Payment Details
      </h1>
      <PaymentDetailsDashboard />
    </div>
  );
};

export default adminLayout(PaymentDetails);

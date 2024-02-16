import React from "react";
import MultiActionAreaCard from "../components/Card";
import appointment from "../assets/images/appointment.png";
import payment from "../assets/images/payment.png";
import report from "../assets/images/report.png";
import test from "../assets/images/test.png";
import { Card } from "@mui/material";
const LoggedIn = () => {
  return (
    <>
      <div
        className="services_section -z-1"
        id="service"
        style={{ margin: "130px auto" }}
      >
        <div className="services -z-1">
          <MultiActionAreaCard
            name="Book an Appointment"
            image={appointment}
            linkText="BOOK NOW"
          />
          <MultiActionAreaCard
            name="Automated Testing"
            image={test}
            linkText="TEST HERE"
          />
          <MultiActionAreaCard
            name="View Test Reports"
            image={report}
            linkText="CHECK REPORTS"
          />
        </div>
      </div>
    </>
  );
};

export default LoggedIn;

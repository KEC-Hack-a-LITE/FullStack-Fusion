import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { PDFViewer, pdf } from "@react-pdf-viewer/core";
import html2canvas from "html2canvas";

const BookingConfirmation = () => {
  const location = useLocation();
  const value = new URLSearchParams(location.search).get("value");
  const docName = new URLSearchParams(location.search).get("docName");
  const reduxStore = useSelector((store) => store);
  const user = reduxStore.user.value;
  const dispatch = useDispatch();
  const today = dayjs().format("YYYY-MM-DD");
  console.log(today);

  return (
    <div className="bookingSlip">
      <h1>Finalize your Appointment</h1>
      <div className="receipt">
        <h3>Today's Date: {today} </h3>
        <h3>Appointment Time: {value}</h3>
        <h3>Patient: {user.firstName}</h3>
        <h3>Doctor: {docName}</h3>
        <h3>
          Amount:
          ----------------------------------------------------------------------------------------------------------------------------------------
          Rs. 850
        </h3>

        <span style={{ color: "black" }}>
          <hr />
        </span>

        <h3>
          Grand Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Rs. 850
        </h3>
      </div>

      <div className="button-pay">
        <button>Pay Now With Khalti</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;

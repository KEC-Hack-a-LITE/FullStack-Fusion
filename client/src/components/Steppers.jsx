import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const Radios = () => {
  return (
    <>
      <Formik
        initialValues={{
          department: "",
        }}
        validationSchema={Yup.object({
          department: Yup.string()
            .trim()
            .oneOf(["ortho", "ent", "neuro", "cardiology"]),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
              height: "40vh",
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "10px",
              padding: "2rem",
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ortho"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={() => {
                    setFieldValue("department", "ortho");
                  }}
                  value="ortho"
                  control={<Radio />}
                  label="Ortho"
                />
                <FormControlLabel
                  value="ent"
                  control={<Radio />}
                  label="Ent"
                  onChange={() => {
                    setFieldValue("department", "ent");
                  }}
                />
                <FormControlLabel
                  value="cardiology"
                  control={<Radio />}
                  label="Cardiology"
                  onChange={() => {
                    setFieldValue("department", "cardiology");
                  }}
                />
                <FormControlLabel
                  value="neuro"
                  control={<Radio />}
                  label="Neuro"
                  onChange={() => {
                    setFieldValue("department", "neuro");
                  }}
                />
              </RadioGroup>
            </FormControl>
          </form>
        )}
      </Formik>
      ;
    </>
  );
};

export default Radios;

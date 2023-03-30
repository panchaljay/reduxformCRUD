import React from "react";
import "./style/form.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { adddata } from "../Redux/feature/formSlice";

function Form() {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const emailRules = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .max(12, "must be 12 character or less")
        .required("required"),
      lastname: yup
        .string()
        .max(12, "must be 12 character or less")
        .required("required"),
      age: yup.number().required("required"),
      email: yup
        .string()
        .matches(emailRules, { message: "Invalid email" })
        .required("required"),
      password: yup
        .string()
        .min(8)
        .matches(passwordRules, {
          message: "Please create a stronger password",
        })
        .required("required"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(adddata([values]));
      formik.resetForm();
      
      var data =JSON.parse(localStorage.getItem("formdata") || "[]")
      data.push(values)
      localStorage.setItem("formdata", JSON.stringify(data))
    },
  });

  return (
    <div className="main">
      <div>Form</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Enter First Name:-</label>
          <br />
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First Name"
            className="form-control"
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <p>{formik.errors.firstname}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter Last Name:-</label>
          <br />
          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last Name"
            className="form-control"
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <p>{formik.errors.lastname}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter Age:-</label>
          <br />
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            className="form-control"
            value={formik.values.age}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.age && formik.errors.age ? (
            <p>{formik.errors.age}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter Email:-</label>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="form-control"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter Password:-</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="form-control"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter Confirm Password:-</label>
          <br />
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm password"
            className="form-control"
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <p>{formik.errors.confirmpassword}</p>
          ) : null}
        </div>
        <div className="submit-btn">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Form;

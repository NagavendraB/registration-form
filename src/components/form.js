import React from "react";
import PropTypes from "prop-types";
import {reduxForm, Field} from "redux-form";
import {asyncValidate, validate} from "../utils/index";
import {FormField} from "./index";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/styles.css";

const Form = ({handleSubmit}) => 
  <div className="register-account">
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <h2>Register account</h2>
      </div>
      <Field name="firstName" label="First Name" component={FormField} />
      <Field name="lastName" label="Last Name" component={FormField} />
      <Field name="email" label="Email" component={FormField} />
      <Field type="text" name="iban" label="IBAN" component={FormField} />
      <div className="text-right mt-5">
        <button type="submit" className="btn btn-primary mb-2 text-right">Submit!</button>
      </div>
    </form>
  </div>

export default reduxForm({
  form: "demo",
  validate,
  asyncValidate,
  asyncBlurFields: ["iban"]
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func
};

Form.defaultProps = {
  handleSubmit: () => null
}
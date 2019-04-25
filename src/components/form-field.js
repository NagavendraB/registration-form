import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/styles.css";

const FormField = ({input, label, type, meta: {asyncValidating, touched, error}}) =>
  <div className="form-group">
    <label>{label}</label>
    <div className={classnames({"async-validating": asyncValidating})}>
      <input className="form-control" {...input} type={type} placeholder={label} />
      {touched && error && <span className="validation-message">{error}</span>}
    </div>
  </div>

export default FormField;

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  asyncValidating: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.bool
};

FormField.defaultProps = {
  label: "",
  type: "",
  asyncValidating: false,
  touched: false,
  error: false
}
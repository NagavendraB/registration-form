import React from "react";
import PropTypes from "prop-types";

const FormDetails = ({formDetails}) => 
  <ul className="list-group">
    {
      formDetails ?
        <React.Fragment> 
          <li className="list-group-item">First Name: {formDetails.firstName}</li>
          <li className="list-group-item">Last Name: {formDetails.lastName}</li>
          <li className="list-group-item">Email: {formDetails.email}</li>
          <li className="list-group-item">IBAN: {formDetails.iban}</li>
        </React.Fragment>  :
      null
    }
  </ul>

export default FormDetails;

FormDetails.propTypes = {
  formDetails: PropTypes.object
};

FormDetails.defaultProps = {
  formDetails: {}
}
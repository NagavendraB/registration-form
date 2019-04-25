import {validateIBAN} from "../services/index";
import isValidEmail from "sane-email-validation";

/**
 * This function is used to validate the IBAN
 * 
 * @param {object} values - user entered values.
 * @returns {string} - error message.
 */
export const asyncValidate = async (values) => {
  const validationResponse = await validateIBAN(values.iban);
  
  if (validationResponse && validationResponse.status === 200) {
    if (!validationResponse.data.valid) {
      throw  {iban: "IBAN should be valid"};
    }
  }
  if (!validationResponse || validationResponse.status !== 200) {
    throw {iban: "Service is not avilable to validate IBAN now, please try again."};
  }
};

/**
 * This function is used to check user name is valid or not
 * 
 * @param {string} name - entered user name.
 * @param {string} type - type - first name or last name.
 * @returns {string} - error message or null.
 */ 
export const validateNames = (name, type) => {
  if (!name) {
    return `${type} is required`;
  } 
  if (!(/^[A-Za-z]+$/.test(name))) {
    return `${type} should contain only small and capital letters, no numbers, special characters`;
  }
  return "";
}

/**
 * This function is used to check email is valid or not
 * 
 * @param {string} email - entered value in email input.
 * @returns {string} - error message or null.
 */
export const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  } 
  if (!isValidEmail(email)) {
    return "Value should be a valid email";
  }
  return "";
}

/**
 * This function is used to check IBAN is valid or not
 * 
 * @param {string} iban - entered IBAN.
 * @returns {string} - error message or null.
 */
export const validateAccountIBAN = (iban) => {
  if (!iban) {
    return "IBAN is required";
  }
  return "";
}

/**
 * This function is used to perform validations for user entered data
 * 
 * @param {string} values - user entered values.
 * @returns {string} - error/validation messages.
 */
export const validate = values => {
  const errors = {}
  errors.firstName = validateNames(values.firstName, "First name");
  errors.lastName = validateNames(values.lastName, "Last name");
  errors.email = validateEmail(values.email);
  errors.iban = validateAccountIBAN(values.iban);
  return errors;
};

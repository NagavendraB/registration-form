import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../store";
import {Provider} from "react-redux";

import {validateNames, validateEmail, validateAccountIBAN} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('validateNames function testcases', () => {
  it('`validateNames` should render name properly without any error', () => {
    expect(validateNames("Testname", "first name")).toBe("");
  });

  it('`validateNames` should render validation error if it is empty', () => {
    expect(validateNames("", "first name")).toBe("first name is required");
  });

  it('`validateNames` should render validation error if it is invalid', () => {
    expect(validateNames("Test Name*/*", "first name")).toBe("first name should contain only small and capital letters, no numbers, special characters");
  });
});

describe('validateEmail function testcases', () => {
  it('`validateEmail` should render name properly without any error', () => {
    expect(validateEmail("This is invalid Email Id")).toBe("Value should be a valid email");
  });

  it('`validateEmail` should render error if email is empty', () => {
    expect(validateEmail("")).toBe("Email is required");
  });

  it('`validateEmail` should render name properly without any error', () => {
    expect(validateEmail("test@gmail.com")).toBe("");
  });
});

describe('validateAccountIBAN function testcases', () => {
  it('`validateAccountIBAN` should render IBAN proparly if it is valid', () => {
    expect(validateAccountIBAN("DE1550070787874950385")).toBe("");
  });

  it('`validateAccountIBAN` should throw error if IBAN is empty', () => {
    expect(validateAccountIBAN("")).toBe("IBAN is required");
  });
});
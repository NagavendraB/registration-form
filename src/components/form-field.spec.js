import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../store";
import {Provider} from "react-redux";

import {FormField} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test FormField Component', () => {
  it('`FormField` exist and be a component', () => expect(FormField).toBeInstanceOf(Function));

  it('`FormField` element should render the form fields', () => {
    const component = mount(<FormField meta={{asyncValidating: false, touched: false, error: false}} />);
    expect(component.find('.form-group')).toBeTruthy();
  });

  it('`FormField` element should render the error message if validation is failed', () => {
    const component = mount(<FormField meta={{asyncValidating: false, touched: false, error: true}} />);
    expect(component.find('.validation-message')).toBeTruthy();
  });
});
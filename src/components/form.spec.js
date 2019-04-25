import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Form} from '.';
import {Provider} from "react-redux";
import store from "../store";

Enzyme.configure({ adapter: new Adapter() });

describe('Test Form Component', () => {
  it('`Form` exist and be a component', () => expect(Form).toBeInstanceOf(Function));

  it('`Form` element should render the form fields', () => {
    const component = mount(<Provider store={store}><Form /></Provider>);
    expect(component.find('.register-account')).toBeTruthy();
    expect(component.find('.form-group')).toBeTruthy();
  });

  it('Test click event for form submit button', () => {
    const mockCallBack = jest.fn();

    const component = mount(<Provider store={store}><Form onSubmit={mockCallBack} /></Provider>);
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
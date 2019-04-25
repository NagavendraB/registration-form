import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../store";
import {Provider} from "react-redux";

import {ModalPopOver} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test ModalPopOver Component', () => {
  it('`ModalPopOver` exist and be a component', () => expect(ModalPopOver).toBeInstanceOf(Function));

  it('`ModalPopOver` element should render the Model popup', () => {
    const component = mount(<ModalPopOver />);
    expect(component.find('.modal')).toBeTruthy();
  });
});
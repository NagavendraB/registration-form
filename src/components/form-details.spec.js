import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {FormDetails} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test FormDetails Component', () => {
  it('`FormDetails` exist and be a component', () => expect(FormDetails).toBeInstanceOf(Function));

  it('`FormDetails` element should render the details of the form ', () => {
    const component = mount(
      <FormDetails formDetails={{firstName: 'first name', lastName: 'last name', email: 'valid email', iban: 'iban'}} />
    );
    expect(component.find('.list-group')).toBeTruthy();
    expect(component.find('li')).toBeTruthy();
    expect(component.find('ul').children().length).toBe(4);
  });
});
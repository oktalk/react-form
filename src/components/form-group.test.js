import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import FormGroup from './form-group'

describe(FormGroup, () => {
  const name = 'Person';
  const mockRemoveGreeting = jest.fn();
  const component = shallow(
    <FormGroup
      name={name}
      removeGreeting={mockRemoveGreeting}
    />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <FormGroup name="Person" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('contains the supplied name', () => {
    expect(component.text()).toContain(name);
  });

  it('modifies the greeting when frenchify button is clicked', () => {
    component.find('button.frenchify').simulate('click');
    expect(component.text()).toContain('Bonjour');
  });

  it('removes the greeting when remove button is clicked', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveGreeting).toBeCalled();
  });
});

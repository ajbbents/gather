import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateNumberOfEents={() => { }} />
    );
  });

  test('renders the component', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });
});

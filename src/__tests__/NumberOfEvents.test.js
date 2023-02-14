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

  test('default number of event value is 10', () => {
    expect(NumberOfEventsWrapper.find('input.num').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
  });

  test('number of events value can be changed', () => {
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
    NumberOfEventsWrapper.find('input.num').simulate('change', {
      target: { value: 7 }
    });
    expect(NumberOfEventsWrapper.state('num')).toBe(7);
  });

});

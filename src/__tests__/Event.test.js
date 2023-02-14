import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test('renders the event component', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('renders the summary as an h1', () => {
    const summary = EventWrapper.find('h1.summary');
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe(event.summary);
  });

  test('Event start time is rendered correctly', () => {
    const eventStart = EventWrapper.find('p.event-start');
    expect(eventStart).toHaveLength(1);
    expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
  });

  test('Event location is rendered correctly', () => {
    const eventLocation = EventWrapper.find('p.event-location');
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
  });

  test('Renders button show details when collapsed', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    expect(detailsButton).toHaveLength(1);
    expect(detailsButton.text()).toBe('show details');
  });

});
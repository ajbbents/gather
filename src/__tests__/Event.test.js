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

  test('Renders collapsed state as default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('Expand details when show details is clicked', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    expect(detailsButton.text()).toBe('show details');
    expect(EventWrapper.find('h2.about')).toHaveLength(0);
    expect(EventWrapper.find('a.link')).toHaveLength(0);
    expect(EventWrapper.find('p.description')).toHaveLength(0);
    detailsButton.simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('Collapse details when hide details is clicked', () => {
    EventWrapper.setState({ collapsed: false });
    const detailsButton = EventWrapper.find('button.details-button');
    const aboutHeader = EventWrapper.find('h2.about');
    const link = EventWrapper.find('a.link');
    const description = EventWrapper.find('p.description');
    expect(detailsButton.text()).toBe('hide details');
    expect(aboutHeader).toHaveLength(1);
    expect(aboutHeader.text()).toBe('About the event:');
    expect(link).toHaveLength(1);
    expect(link.text()).toBe('See details on Google Cal');
    expect(description).toHaveLength(1);
    expect(description.text()).toBe(event.description);
    detailsButton.simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
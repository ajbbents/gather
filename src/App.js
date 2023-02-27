import './nprogress.css'
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { checkToken, extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 10
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      });
    });
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number
    });
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  // getData = () => {
  //   const { locations, events } = this.state;
  //   const data = locations.map((location) => {
  //     const number = events.filter((event) => event.location === location).length
  //     const city = location.split(', ').shift()
  //     return { city, number };
  //   })
  //   return data;
  // };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, locations } = this.state;

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents
          num={this.state.numberOfEvents}
          updateNumberOfEvents={(num) =>
            this.updateNumberOfEvents(num)}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className='event'>
        <h1 className='summary'>
          {event.summary}
        </h1>
        <p className='event-start'>
          {new Date(event.start.dateTime).toString()}
        </p>
        <p className='event-location'>
          {`@${event.summary} | ${event.location}`}
        </p>

          </div>
        )}

        <button className='details-button' onClick={() => this.toggleDetails()}>
          {collapsed ? 'show' : 'hide'} details
        </button>
      </div>
    );
  }
}

export default Event;
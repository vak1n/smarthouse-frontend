import React, {Component} from 'react';
import IEventData from '../../interfaces/IEventData';
import {cn} from '@bem-react/classname';

import './Events.scss';

const cnEvents = cn('Events');

interface IEventsSate {
  events: IEventData[]
}

export default class Events extends Component<{}, IEventsSate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('https://smarthouse-server.herokuapp.com/api/events/', {method: 'POST'})
      .then(response => response.json())
      .then(json => {
        this.setState({events: json.events})
      });
  }

  render() {
    const events = this.state.events.map((event, index) =>
      <div className="events__event event" key={index}>
      </div>
    );

    return (
      <div className={cnEvents()}>
        {events}
      </div>
    );
  }
}

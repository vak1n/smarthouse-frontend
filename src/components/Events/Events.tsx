import React, {Component} from 'react';
import IEventData from '../../interfaces/IEventData';
import {cn} from '@bem-react/classname';

import Event from '../Event/Event'

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
      <div className={cnEvents('Event', {type: event.size}, ['Event'])} key={index}>
        <Event
          type={event.type}
          title={event.title}
          source={event.source}
          time={event.time}
          description={event.description}
          icon={event.icon}
          size={event.size}
        />
      </div>
    );

    return (
      <div className={cnEvents()}>
        {events}
      </div>
    );
  }
}

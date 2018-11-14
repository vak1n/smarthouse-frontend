import React from 'react';
import IEventData from '../../interfaces/IEventData';
import {cn} from '@bem-react/classname';

import Graph from '../Graph/Graph'

import './Event.scss';

const cnEvent = cn('Event');

const Event = (event: IEventData) => {
  const icon = event.type === 'critical' ? `${event.icon}_white` : event.icon;

  return (
    <>
      <div className={cnEvent('Info', {critical: event.type === 'critical'})}>
        <div className={cnEvent('Wrapper')}>
          <div className={cnEvent('Icon', {icon: icon, size: event.size})}/>
          <div className={cnEvent('Title', {size: event.size})}>
            {event.title}
          </div>
          <div className={cnEvent('Name', {size: event.size})}>
            {event.source}
          </div>
          <div className={cnEvent('Date', {size: event.size})}>
            {event.time}
          </div>
        </div>
      </div>
      {(event.description || event.data) &&
      <div className={cnEvent('Data-container')}>
        <div className={cnEvent('Data')}>
          {event.description &&
          <div className={cnEvent('Description', {size: event.size})}>
            {event.description}
          </div>
          }
          {event.data && event.data.type &&
          <div className={cnEvent('Graph')}>
            <Graph/>
          </div>
          }
        </div>
      </div>
      }
    </>
  );
};

export default Event;

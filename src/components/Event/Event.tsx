import React from 'react';
import IEventData from '../../interfaces/IEventData';
import {RegistryConsumer} from '@bem-react/di';
import {cn} from '@bem-react/classname';

import Graph from '../Graph/Graph'
import Microclimate from '../Microclimate/Microclimate'
import Media from '../Media/Media'
import {Button} from '../Button'
import {cnWalle} from '../Walle/Walle'

import './Event.scss';

const cnEvent = cn('Event');

const Event = (event: IEventData) => {
  const icon = event.type === 'critical' ? `${event.icon}_white` : event.icon;

  return (
    <RegistryConsumer>
      {registries => {
        const platform = registries['platform'];
        const Walle = platform.get(cnWalle());

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
            <div className={cnEvent('DataContainer')}>
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
                {event.data && event.data.temperature && event.data.humidity &&
                <div className={cnEvent('Microclimate')}>
                  <Microclimate temperature={event.data.temperature} humidity={event.data.humidity}/>
                </div>
                }
                {event.data && event.data.albumcover && event.data.artist && event.data.track && event.data.volume &&
                <div className={cnEvent('Media')}>
                  <Media
                    albumcover={event.data.albumcover}
                    artist={event.data.artist}
                    track={event.data.track}
                    volume={event.data.volume}/>
                </div>
                }
                {event.data && event.data.buttons &&
                <div className={cnEvent('Buttons')}>
                  <div className={cnEvent('ButtonsWrapper')}>
                    <Button theme={'yellow'}>
                      {event.data.buttons[0]}
                    </Button>
                    <Button theme={'grey'}>
                      {event.data.buttons[1]}
                    </Button>
                  </div>
                </div>
                }
                {event.data && event.data.image &&
                <div className={cnEvent('Walle')}>
                  <Walle/>
                </div>
                }
              </div>
            </div>
            }
          </>
        )

      }}
    </RegistryConsumer>
  );
};

export default Event;

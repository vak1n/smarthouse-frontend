import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import React from 'react';
import IEventData from '../../interfaces/IEventData';

import { Button } from '../Button';
import Graph from '../Graph/Graph';
import Media from '../Media/Media';
import Microclimate from '../Microclimate/Microclimate';
import { cnWalle } from '../Walle/Walle';

import './Event.scss';

const cnEvent = cn('Event');

const Event = (event: IEventData) => {
  const icon = event.type === 'critical' ? `${event.icon}_white` : event.icon;

  return (
    <RegistryConsumer>
      {(registries) => {
        const platform = registries.platform;
        const Walle = platform.get(cnWalle());
        const data = event.data;

        return (
          <>
            <div className={cnEvent('Info', { critical: event.type === 'critical' })}>
              <div className={cnEvent('Wrapper')}>
                <div className={cnEvent('Icon', { icon, size: event.size })} />
                <div className={cnEvent('Title', { size: event.size })}>{event.title}</div>
                <div className={cnEvent('Name', { size: event.size })}>{event.source}</div>
                <div className={cnEvent('Date', { size: event.size })}>{event.time}</div>
              </div>
            </div>
            {(event.description || data) && (
              <div className={cnEvent('DataContainer')}>
                <div className={cnEvent('Data')}>
                  {event.description && (
                    <div className={cnEvent('Description', { size: event.size })}>{event.description}</div>
                  )}
                  {data && data.type && (
                    <div className={cnEvent('Graph')}>
                      <Graph />
                    </div>
                  )}
                  {data && data.temperature && data.humidity && (
                    <div className={cnEvent('Microclimate')}>
                      <Microclimate temperature={data.temperature} humidity={data.humidity} />
                    </div>
                  )}
                  {data && data.albumcover && data.artist && data.track && data.volume && (
                    <div className={cnEvent('Media')}>
                      <Media
                        albumcover={data.albumcover}
                        artist={data.artist}
                        track={data.track}
                        volume={data.volume}
                      />
                    </div>
                  )}
                  {data && data.buttons && (
                    <div className={cnEvent('Buttons')}>
                      <div className={cnEvent('ButtonsWrapper')}>
                        <Button theme={'yellow'}>{data.buttons[0]}</Button>
                        <Button theme={'grey'}>{data.buttons[1]}</Button>
                      </div>
                    </div>
                  )}
                  {data && data.image && (
                    <div className={cnEvent('Walle')}>
                      <Walle />
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        );
      }}
    </RegistryConsumer>
  );
};

export default Event;

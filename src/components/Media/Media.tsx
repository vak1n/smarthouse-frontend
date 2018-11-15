import { cn } from '@bem-react/classname';
import React from 'react';

interface IMediaProps {
  albumcover: string;
  artist: string;
  track: {
    name: string;
    length: string;
  };
  volume: number;
}

import './Media.scss';

const cnMedia = cn('Media');

const Media = (props: IMediaProps) => (
  <div className={cnMedia()}>
    <img className={cnMedia('Albumcover')} src={props.albumcover} />
    <div className={cnMedia('Artist')}>{`${props.artist} - ${props.track.name}`}</div>
    <input className={cnMedia('Time')} type={'range'} />
    <label className={cnMedia('TimeValue')}>{props.track.length}</label>
    <button className={cnMedia('Prev')} />
    <button className={cnMedia('Next')} />
    <input className={cnMedia('Volume')} type={'range'} />
    <label className={cnMedia('VolumeValue')}>{props.volume}</label>
  </div>
);

export default Media;

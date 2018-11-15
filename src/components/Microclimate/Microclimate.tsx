import {cn} from '@bem-react/classname';
import React from 'react'

interface IMicroclimateProps {
  temperature: number,
  humidity: number
}

import './Microclimate.scss';

const cnMicroclimate = cn('Microclimate');

const Microclimate = (props: IMicroclimateProps) => (
  <div className={cnMicroclimate()}>
    <div className={cnMicroclimate('Temperature')}>
      <span className={cnMicroclimate('ValueName')}>
        Температура:
      </span>
      <span className={cnMicroclimate('Value', {temperature: true})}>
        {props.temperature}
      </span>
    </div>
    <div className={cnMicroclimate('Humidity')}>
      <span className={cnMicroclimate('ValueName')}>Влажность:</span>
      <span className={cnMicroclimate('Value', {humidity: true})}>
        {props.humidity}
      </span>
    </div>
  </div>
);

export default Microclimate;

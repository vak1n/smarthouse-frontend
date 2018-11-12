import React from 'react';
import {cn} from '@bem-react/classname';

import './Logo.scss';

const cnLogo = cn('Logo');

const Logo = () => {
  return (
    <div className={cnLogo()} />
  );
};

export default Logo;


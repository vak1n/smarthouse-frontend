import {cn} from '@bem-react/classname';
import React from 'react';

import {menu} from '../../const/menu';
import Logo from '../Logo/Logo'
import {Menu} from '../Menu'

import './Header.scss';

const cnHeader = cn('Header');

const Header = () => {
  return (
    <header className={cnHeader()}>
      <div className={cnHeader('Logo')}>
        <Logo/>
      </div>
      <div className={cnHeader('Menu')}>
        <Menu type={'header'} links={menu.links}/>
      </div>
    </header>
  );
};

export default Header;

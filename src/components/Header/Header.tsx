import React from 'react';
import {cn} from '@bem-react/classname';

import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import {menu} from '../../const/menu';

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

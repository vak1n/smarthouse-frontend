import {cn} from '@bem-react/classname';
import React from 'react';

import {menu} from '../../const/menu';
import {Menu} from '../Menu'


import './Footer.scss';

const cnFooter = cn('Footer');

const Footer = () => {
  return (
    <footer className={cnFooter()}>
      <div className={cnFooter('Menu')}>
        <Menu type={'footer'} links={menu.links}/>
      </div>
      <div className={cnFooter('Copyright')}>© 2001–2017 ООО «Яндекс»</div>
    </footer>
  );
};

export default Footer;


import {cn} from '@bem-react/classname';
import React from 'react';
import {IMenuProps} from './index';

import './Menu.scss';

const cnPage = cn('Menu');

export const Menu: React.SFC<IMenuProps> = props => (
  <div className={cnPage()}>
    <nav className={cnPage('Wrapper', {type: props.type})}>
      <ul className={cnPage('List')}>
        {
          props.links.map((link, index) =>
            <li className={cnPage('Item', {type: props.type})} key={index}>
              <a className={cnPage('Link', {type: props.type})} href={link.href}>
                {link.name}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  </div>
);

import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import React, { Component } from 'react';
import { IMenuProps } from '../index';
import { Menu } from '../Menu';

import './Menu_type_header.scss';

const cnPage = cn('Menu');

interface IMenuSate {
  mobileOpen: boolean;
}

class MenuHeaderComponent extends Component<IMenuProps, IMenuSate> {
  constructor(props: IMenuProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  public toggleMobile() {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  }

  public render() {
    const links = this.props.links.map((link, index) => (
      <li className={cnPage('Item', { type: this.props.type })} key={index}>
        <a className={cnPage('Link', { type: this.props.type, selected: index === 0 })} href={link.href}>
          {link.name}
        </a>
      </li>
    ));

    return (
      <div className={cnPage()}>
        <nav className={cnPage('Wrapper', { type: this.props.type, show: this.state.mobileOpen })}>
          <ul className={cnPage('List')}>{links}</ul>
        </nav>
        <div className={cnPage('Burger')} onClick={this.toggleMobile.bind(this)} />
      </div>
    );
  }
}

const MenuHeader: ModBody<IMenuProps> = (Base, props) => (
  <>
    <MenuHeaderComponent type={props.type} links={props.links} />
  </>
);

export const MenuTypeHeader = withBemMod<IMenuProps>('Menu', { type: 'header' }, MenuHeader);

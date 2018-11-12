import React, {Component} from 'react';
import {cn} from '@bem-react/classname';

import IItemMenuData from '../../interfaces/IItemMenuData';

import './Menu.scss';
import {isBoolean} from "util";

const cnPage = cn('Menu');

interface IMenuProps {
  type?: string,
  links: IItemMenuData[]
}

interface IMenuSate {
  mobileOpen: boolean
}

class Menu extends Component<IMenuProps, IMenuSate> {
  constructor(props: IMenuProps){
    super(props);
    this.state = {
      mobileOpen: false
    }
  }

  showMobile() {
    this.setState({mobileOpen: true})
  }

  hideMobile() {
    this.setState({mobileOpen: false})
  }

  toggleMobile() {
    this.setState({mobileOpen: !this.state.mobileOpen})
  }

  render() {
    const links = this.props.links.map((link, index) =>
      <li className={cnPage('Item')} key={index}>
        <a className={cnPage('Link')} href={link.href}>
          {link.name}
        </a>
      </li>
    );

    return (
      <div className={cnPage()}>
        <nav className={cnPage('Wrapper', {type: this.props.type, show: this.state.mobileOpen})}>
          <ul className={cnPage('List')}>
            {links}
          </ul>
        </nav>
        <div className={cnPage('Burger')} onClick={this.toggleMobile.bind(this)}/>
      </div>
    );
  }
}

export default Menu;

import { compose, IClassNameProps } from '@bem-react/core';
import IItemMenuData from '../../interfaces/IItemMenuData';

import { MenuTypeFooter } from './_type/Menu_type_footer';
import { MenuTypeHeader } from './_type/Menu_type_header';
import { Menu as Base } from './Menu';

export interface IMenuProps extends IClassNameProps {
  links: IItemMenuData[];
  type?: 'header' | 'footer';
}

export const Menu = compose(
  MenuTypeHeader,
  MenuTypeFooter,
)(Base);

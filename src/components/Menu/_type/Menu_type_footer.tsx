import {withBemMod} from '@bem-react/core';
import React from 'react';
import {IMenuProps} from '../index';
import {Menu} from '../Menu';

import './Menu_type_footer.scss'

export const MenuTypeFooter = withBemMod<IMenuProps>('Menu', {type: 'footer'});

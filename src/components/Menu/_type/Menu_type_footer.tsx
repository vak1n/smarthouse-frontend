import React from 'react';
import {withBemMod} from '@bem-react/core';
import {Menu} from '../Menu';
import {IMenuProps} from '../index';

import './Menu_type_footer.scss'

export const MenuTypeFooter = withBemMod<IMenuProps>('Menu', {type: 'footer'});

import React from 'react';
import {withBemMod} from '@bem-react/core';

import { IButtonProps } from '../index';

import './Button_theme_yellow.scss';

export const ButtonThemeYellow = withBemMod<IButtonProps>('Button', {theme: 'yellow'});

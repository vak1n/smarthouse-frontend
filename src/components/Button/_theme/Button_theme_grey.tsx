import React from 'react';
import {withBemMod} from '@bem-react/core';

import { IButtonProps } from '../index';

import './Button_theme_grey.scss';

export const ButtonThemeGrey = withBemMod<IButtonProps>('Button', {theme: 'grey'});

import { compose, IClassNameProps } from '@bem-react/core';

import { ButtonThemeGrey } from './_theme/Button_theme_grey';
import { ButtonThemeYellow } from './_theme/Button_theme_yellow';
import { Button as Base } from './Button';

export interface IButtonProps extends IClassNameProps{
  theme?: 'grey' | 'yellow';
}

export const Button = compose(
  ButtonThemeGrey,
  ButtonThemeYellow,
)(Base);

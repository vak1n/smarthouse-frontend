import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IButtonProps } from './index';

import './Button.scss';

const cnButton = cn('Button');

export const Button: React.SFC<IButtonProps> = (props) => (
  <button className={cnButton({ theme: props.theme }, [props.className])}>{props.children}</button>
);

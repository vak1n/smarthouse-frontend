import {cn} from '@bem-react/classname';
import React from 'react'

import './Graph.scss';

const cnGarph = cn('Graph');

const Grath = () => (
  <img className={cnGarph()}
       sizes='(max-width: 1770px) 100vw, 1770px'
       srcSet='assets/graph_jclkz0_c_scale,w_320.png 320w,
              assets/graph_jclkz0_c_scale,w_793.png 793w,
              assets/graph_jclkz0_c_scale,w_938.png 938w,
              assets/graph_jclkz0_c_scale,w_1770.png 1770w'
       src='assets/graph_jclkz0_c_scale,w_1770.png'
       alt='graph'
       title='graph'
  />
);

export default Grath;

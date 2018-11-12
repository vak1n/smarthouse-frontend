import React from 'react';
import {cn} from '@bem-react/classname';

import './Page.scss';

const cnPage = cn('Page');

const Page = () => {
  return (
    <>
      <div className={cnPage('Header')}>

      </div>
      <div className={cnPage('Content')}>

      </div>
      <div className={cnPage('Footer')}>

      </div>
    </>
  );
};

export default Page;

import React from 'react';
import {cn} from '@bem-react/classname';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Page.scss';

const cnPage = cn('Page');

const Page = () => {
  return (
    <>
      <div className={cnPage('Header')}>
        <Header/>
      </div>
      <div className={cnPage('Content')}>
        <h1 className={cnPage('Title')}>Лента событий</h1>
      </div>
      <div className={cnPage('Footer')}>
        <Footer/>
      </div>
    </>
  );
};

export default Page;

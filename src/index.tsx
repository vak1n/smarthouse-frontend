import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { withRegistry } from '@bem-react/di';
import MobileDetect from 'mobile-detect';
import Page from './components/Page/Page';
import { desktop } from './components/Page/Page.registry/desktop';
import { touch } from './components/Page/Page.registry/touch';

const platformsMap = {
  desktop,
  touch,
};

const mb = new MobileDetect(window.navigator.userAgent);
const platform = mb.mobile() || mb.tablet() ? 'touch' : 'desktop';
const Platformed = withRegistry(platformsMap[platform])(Page);

ReactDOM.render(<Platformed />, document.getElementById('root'));

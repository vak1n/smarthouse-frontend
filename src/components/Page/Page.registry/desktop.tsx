import { Registry } from '@bem-react/di';

import { cnWalle } from '../../Walle/Walle';
import { Walle } from '../../Walle/Walle@desktop';

export const desktop = new Registry({ id: 'platform' });

desktop.set(cnWalle(), Walle);

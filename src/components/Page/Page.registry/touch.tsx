import { Registry } from '@bem-react/di';

import { cnWalle } from '../../Walle/Walle';
import { Walle } from '../../Walle/Walle@touch';

export const touch = new Registry({ id: 'platform' });

touch.set(cnWalle(), Walle);

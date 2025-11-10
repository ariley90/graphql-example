import { setupServer } from 'msw/node';

import { handlers } from './handlers/southParkHandlers';
import { handlers as dumbExample } from './handlers';
import { handlers as basicSmartExample } from './handlers2';

export const server = setupServer(...handlers);

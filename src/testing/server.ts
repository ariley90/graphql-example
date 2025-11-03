import { setupServer } from 'msw/node';

import { handlers } from './handlers/southParkHandlers';

export const server = setupServer(...handlers);

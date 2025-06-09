import { setupServer } from 'msw/node';

import { handlers } from './handlers2';

export const server = setupServer(...handlers);

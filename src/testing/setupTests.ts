import '@testing-library/jest-dom/vitest';

import { server } from '@/testing/server';
import { cache } from './testUtils';
// import { resetApolloClientSingletons } from '@apollo/client-integration-nextjs';


beforeAll(() => {
    console.log('starting server');
  server.listen({ onUnhandledRequest: 'error' });
  vi.mock('next/navigation', async () => {
    const actual = await vi.importActual('next/navigation');
    return {
      ...actual,
      useRouter: () => {
        return {
          push: vi.fn(),
          replace: vi.fn(),
        };
      },
      usePathname: () => '/app',
      useSearchParams: () => ({
        get: vi.fn(),
      }),
    };
  });
});
afterAll(() => server.close());
beforeEach(() => {
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  window.btoa = (str: string) => Buffer.from(str, 'binary').toString('base64');
  window.atob = (str: string) => Buffer.from(str, 'base64').toString('binary');

});
afterEach(() => {
  server.resetHandlers();
  cache.reset();
});
//  afterEach(resetApolloClientSingletons);

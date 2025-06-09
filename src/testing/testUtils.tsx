import {
  act,
  RenderOptions,
  render as rtlRender,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const cache = new InMemoryCache();
function TestProvider({ children }: React.PropsWithChildren) {
  // this is just a test component to check if the wrapper works
  const httpLink = new HttpLink({
    uri: "https://localhost:4000/graphql", // replace with your GraphQL endpoint
  });
  const client = new ApolloClient({
    // use the `InMemoryCache` from "@apollo/client-integration-nextjs"
    cache,
    link: httpLink,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export const renderWithProviders = async (
  ui: React.ReactNode,
  { ...renderOptions }: RenderOptions = {}
) => {
  const user = userEvent.setup();
  return await act(() => {
    const returnValue = {
      ...rtlRender(ui, {
        wrapper: TestProvider,
        ...renderOptions,
      }),
      user,
    };

    return returnValue;
  });
};

export * from "@testing-library/react";
export { userEvent, rtlRender };

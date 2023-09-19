import React from 'react';
import { Provider } from 'react-redux';

import { LayoutProvider } from '@components/LayoutProvider';
import { store } from '@redux/store';
import { ContactList } from '@screens';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <LayoutProvider>
        <QueryClientProvider client={queryClient}>
          <ContactList />
        </QueryClientProvider>
      </LayoutProvider>
    </Provider>
  );
}

export default App;

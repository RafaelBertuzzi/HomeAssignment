import React from 'react';

import { LayoutProvider } from '@components/LayoutProvider';
import { ContactList } from '@screens';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <LayoutProvider>
      <QueryClientProvider client={queryClient}>
        <ContactList />
      </QueryClientProvider>
    </LayoutProvider>
  );
}

export default App;

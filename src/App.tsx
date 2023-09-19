import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import { LayoutProvider } from '@components/LayoutProvider';
import { store } from '@redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Routes } from './routes';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <LayoutProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </LayoutProvider>
    </Provider>
  );
}

export default App;

/* A working around until the oficial fix: */
LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

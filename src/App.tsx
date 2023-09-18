import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

import { LayoutProvider } from '@components/LayoutProvider';

import StorybookUIRoot from '../.storybook/';

function App(): JSX.Element {
  return (
    <LayoutProvider>
      <Header />
    </LayoutProvider>
  );
}

export default process.env.STORYBOOK_ENABLED === 'true' ? StorybookUIRoot : App;

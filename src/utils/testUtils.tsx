import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { LayoutProvider } from '@components/LayoutProvider';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@redux/store';
import { render } from '@testing-library/react-native';

export const rendererWithProviders = (children: ReactNode) => {
  return renderer
    .create(
      <Provider store={store}>
        <NavigationContainer>
          <LayoutProvider>{children}</LayoutProvider>
        </NavigationContainer>
      </Provider>,
    )
    .toJSON();
};

export const renderWithProviders = (children: ReactNode) => {
  return render(
    <Provider store={store}>
      <NavigationContainer>
        <LayoutProvider>{children}</LayoutProvider>
      </NavigationContainer>
    </Provider>,
  ).toJSON();
};

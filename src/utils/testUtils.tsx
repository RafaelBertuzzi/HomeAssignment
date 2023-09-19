import { ReactNode } from 'react';
import renderer from 'react-test-renderer';

import { LayoutProvider } from '@components/LayoutProvider';
import { render } from '@testing-library/react-native';

export const rendererWithProviders = (children: ReactNode) => {
  return renderer.create(<LayoutProvider>{children}</LayoutProvider>).toJSON();
};

export const renderWithProviders = (children: ReactNode) => {
  return render(<LayoutProvider>{children}</LayoutProvider>).toJSON();
};

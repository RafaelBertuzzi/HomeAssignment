import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Header } from '.';

describe('ContactList Component: Header', () => {
  afterEach(cleanup);

  it('should render ContactList Header', () => {
    const json = rendererWithProviders(<Header />);
    expect(json).toMatchSnapshot();
  });
});

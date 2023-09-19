import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { ContactCard } from '.';

describe('ContactList Component: ContactCard', () => {
  afterEach(cleanup);

  it('should render ContactList ContactCard ', () => {
    const json = rendererWithProviders(<ContactCard name="Name 1" />);
    expect(json).toMatchSnapshot();
  });

  it('should render ContactList ContactCard favorited', () => {
    const json = rendererWithProviders(
      <ContactCard name="Name 2" isFavorited />,
    );
    expect(json).toMatchSnapshot();
  });
});

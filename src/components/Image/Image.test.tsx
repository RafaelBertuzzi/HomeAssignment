import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Image } from '.';

describe('Component: Image', () => {
  afterEach(cleanup);

  it('should render image', () => {
    const json = rendererWithProviders(
      <Image
        alt="search"
        size={6}
        source={require('../../assets/icons/search.png')}
      />,
    );
    expect(json).toMatchSnapshot();
  });
});

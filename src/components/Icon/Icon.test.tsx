import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Icon } from '.';

describe('Component: Icon', () => {
  afterEach(cleanup);

  it('should render icon', () => {
    const json = rendererWithProviders(<Icon name="star-solid" />);
    expect(json).toMatchSnapshot();
  });
});

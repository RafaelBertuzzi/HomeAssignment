import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Divider } from '.';

describe('Component: Divider', () => {
  afterEach(cleanup);

  it('should render divider', () => {
    const json = rendererWithProviders(<Divider />);
    expect(json).toMatchSnapshot();
  });
});

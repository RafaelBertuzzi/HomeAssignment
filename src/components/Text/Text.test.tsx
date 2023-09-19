import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Text } from '.';

describe('Component: Text', () => {
  afterEach(cleanup);

  it('should render text', () => {
    const json = rendererWithProviders(<Text title="test title" />);
    expect(json).toMatchSnapshot();
  });
});

import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { OneInfoText } from '.';

describe('Contact Details Screen Component: OneInfoText', () => {
  afterEach(cleanup);

  it('should render', () => {
    const json = rendererWithProviders(
      <OneInfoText label="Test" value={'1'} />,
    );
    expect(json).toMatchSnapshot();
  });
});

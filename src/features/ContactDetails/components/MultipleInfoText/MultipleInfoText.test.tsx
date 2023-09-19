import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { MultipleInfoText } from '.';

describe('Contact Details Screen Component: MultipleInfoText', () => {
  afterEach(cleanup);

  it('should render', () => {
    const json = rendererWithProviders(
      <MultipleInfoText label="Test" value={['1', '2']} />,
    );
    expect(json).toMatchSnapshot();
  });
});

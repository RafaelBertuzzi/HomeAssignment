import { Text } from 'react-native';

import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Stack } from '.';

const texts = ['Stack 1', 'Stack 2'].map((text) => (
  <Text key={text}>{text}</Text>
));

describe('Component: Stack', () => {
  afterEach(cleanup);

  it('should render children vertical', () => {
    const json = rendererWithProviders(<Stack>{texts}</Stack>);
    expect(json).toMatchSnapshot();
  });

  it('should render children horizontal', () => {
    const json = rendererWithProviders(
      <Stack direction="column">{texts}</Stack>,
    );

    expect(json).toMatchSnapshot();
  });

  it('should render space', () => {
    const json = rendererWithProviders(<Stack space="md">{texts}</Stack>);
    expect(json).toMatchSnapshot();
  });
});

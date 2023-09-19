import { cleanup, fireEvent, screen } from '@testing-library/react-native';
import { rendererWithProviders, renderWithProviders } from '@utils/testUtils';

import { IconButton } from '.';

const onPress = jest.fn();

describe('Component: IconButton', () => {
  afterEach(cleanup);

  it('should render icon', () => {
    const json = rendererWithProviders(
      <IconButton icon="search" onPress={onPress} />,
    );
    expect(json).toMatchSnapshot();
  });

  it('should press button', () => {
    renderWithProviders(<IconButton icon="search" onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
});

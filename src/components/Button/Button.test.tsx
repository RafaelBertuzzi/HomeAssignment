import { cleanup, fireEvent, screen } from '@testing-library/react-native';
import { rendererWithProviders, renderWithProviders } from '@utils/testUtils';

import { Button } from '.';

const onPress = jest.fn();

describe('Component: Button', () => {
  afterEach(cleanup);

  it('should render button', () => {
    const json = rendererWithProviders(
      <Button onPress={onPress}>Button</Button>,
    );
    expect(json).toMatchSnapshot();
  });

  it('should press button', () => {
    renderWithProviders(<Button onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
});

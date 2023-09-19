import { Text } from 'react-native';

import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { FlatList } from '.';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

describe('Component: FlatList', () => {
  afterEach(cleanup);

  it('should render flatlist', () => {
    const json = rendererWithProviders(
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />,
    );
    expect(json).toMatchSnapshot();
  });
});

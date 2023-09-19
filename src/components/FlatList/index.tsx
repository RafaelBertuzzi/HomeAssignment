import { FlatList as FlatListRN } from 'react-native';

import { IFlatListProps } from './types';

export function FlatList<ItemT>({ ...rest }: IFlatListProps<ItemT>) {
  return <FlatListRN {...rest} />;
}

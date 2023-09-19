import { Contact } from 'react-native-contacts';

export interface IContactFlatListProps {
  data: Contact[];
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
}

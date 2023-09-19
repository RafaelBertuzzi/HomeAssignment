import { RefreshControl } from 'react-native';

import { Divider, FlatList, Stack, Text } from '@components';

import { ContactCard } from '../ContactCard';

import { IContactFlatListProps } from './types';

export const ContactFlatList = ({
  data,
  isLoading,
  isRefetching,
  refetch,
}: IContactFlatListProps) => {
  if (isLoading) {
    return <Text title="Loading..." />;
  }

  return (
    <>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <Divider my={4} />}
        renderItem={({ item }) => (
          <ContactCard name={`${item.givenName} ${item.familyName}`} />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        keyExtractor={(item) => item.recordID}
        ListFooterComponent={() => (
          <Stack alignItems={'center'} mt={2}>
            <Text title={`${data?.length} contacts`} />
          </Stack>
        )}
      />
    </>
  );
};
